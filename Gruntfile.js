'use strict';

var collapse = require('bundle-collapser/plugin');

module.exports = function(grunt) {

    // load dependancies
    Object.keys(grunt.file.readJSON('package.json').dependencies)
        .filter(function(taskName) { return taskName.indexOf('grunt-') === 0; })
        .forEach(function(taskName) { grunt.loadNpmTasks(taskName); });


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

        ,jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        }

        ,less: {
            dist: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    "dist/babble.css": "css/styles.less"
                }
            }
        }

        ,watch: {
            // lint: {
            //     files: ['src/**/*.js'],
            //     tasks: ["jshint"]
            // },
            css: {
                files: ['css/*.less'],
                tasks: ["less"]
            },
            livereload: {
                files: ["dist/*"],
                options: {
                    livereload: true
                }
            }
        }
        ,connect: {
            dist: {
                options: {
                    port: 8000,
                    base: [
                        './'
                    ],
                    livereload: true
                }
            }
        },

        browserify: {
            libs: {
                files: {
                    "dist/libs.js": []
                },
                options: {
                    alias: [
                        './libs/reactjs-0.11.2:react/addons',
                        './libs/socket.io-1.1.0:socket.io-client'
                    ]
                }
            },

            watch: {
                src: 'src/app.js',
                dest: "dist/babble.js",
                options: {
                    watch: true,
                    browserifyOptions : {
                        debug: true
                    },
                    transform: ['reactify',],
                    external: "<%= browserify.libs.options.alias %>"
                }
            },

            all: {
                src: 'src/app.js',
                dest: "dist/babble.js",
                options: {
                    transform: [
                        'reactify',
                        ['uglifyify', {global:true}]
                    ],
                    plugin: [collapse,],
                    external: "<%= browserify.libs.options.alias %>"
                }
            }
        }

    });

    grunt.registerTask('build', ['browserify:libs', 'browserify:all', 'less']);
    grunt.registerTask('buildWatch', ['browserify:libs', 'browserify:watch', 'less']);

    grunt.registerTask("dev", ["buildWatch", "connect", "watch"])
    grunt.registerTask('default', ['build']);
};