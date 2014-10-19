
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

            socket.on('send:history', function(history) {
                history.forEach(function(rawMsg) {
                    ChatServerActionCreators.receiveRawMessage(rawMsg);
                });
            });

            socket.on('user:list', function(userList) {
                ChatServerActionCreators.receiveUserList(userList);
            });
            socket.on('user:join', function(data) {
                ChatServerActionCreators.receiveJoinMessage(data);
            });
            socket.on('user:left', function(data) {
                ChatServerActionCreators.receiveLeftMessage(data);
            });

            socket.on('disconnect', function(){
                console.log('Disconnected from socket:', url);
            });
        });
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