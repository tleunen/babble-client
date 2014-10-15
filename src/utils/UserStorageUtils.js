"use strict";

var ChatServerActionCreators = require('../actions/ChatServerActionCreators');

module.exports = {

    findUsername: function() {
        var username = localStorage.getItem('username') || '';

        ChatServerActionCreators.receiveUsername(username);
    },

    saveUsername: function(username) {
        localStorage.setItem('username', username);
    }
};