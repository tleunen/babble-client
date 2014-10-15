
var ChatServerActionCreators = require('../actions/ChatServerActionCreators');
var UserStorageUtils = require('../utils/UserStorageUtils');
var io = require('socket.io-client');

var socket;

module.exports = {

    init: function(url) {

        socket = io(url);

        socket.on('connect', function() {
            console.log('Connected to socket:', url);

            socket.on('send:message', function(data) {
                ChatServerActionCreators.receiveRawMessage(data);
            });

            socket.on('disconnect', function(){
                console.log('Disconnected from socket:', url);
            });
        });


        // // simulate welcome message
        // var welcomeMsg = {
        //     type: 'welcome',
        //     time: Date.now(),
        //     user: 'babble',
        //     msg: '..:Bienvenue sur le chat π jutoba.com:..'
        // };
        // ChatServerActionCreators.receiveRawMessage(welcomeMsg);

        // var usernameMsg = {
        //     type: 'server',
        //     time: Date.now(),
        //     user: 'babble',
        //     msg: 'Please enter your username.'
        // };
        // ChatServerActionCreators.receiveRawMessage(usernameMsg);

    },


    sendMessage: function(text) {
        socket.emit('send:message', text);
    },

    sendUsername: function(username) {
        socket.emit('send:username', username, function sendUsernameCallback(isAuthenticated) {

            if(isAuthenticated) {
                // save the username locally
                UserStorageUtils.saveUsername(username);
            }

            ChatServerActionCreators.receiveUsername(username, isAuthenticated);
        });
    }

};