'use strict';

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
            watch: {
                src: 'src/app.js',
                dest: "dist/babble.js",
                options: {
                    watch: true,
                    browserifyOptions : {
                        debug: true
                    },
                    transform: ['reactify',]
                }
            },

            all: {
                src: 'src/app.js',
                dest: "dist/babble.js",
                options: {
                    transform: ['reactify',]
                }
            }
        }

    });

    grunt.registerTask('build', ['browserify:all', 'less']);
    grunt.registerTask('buildWatch', ['browserify:watch', 'less']);

    grunt.registerTask("dev", ["buildWatch", "connect", "watch"])
    grunt.registerTask('default', ['build']);
};