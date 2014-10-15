"use strict";

var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var ChatSocketUtils = require('../utils/ChatSocketUtils');
var MessageStore = require('../stores/MessageStore');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

    sendUsername: function(username) {
        ChatSocketUtils.sendUsername(username);
    },

    createMessage: function(text) {
        ChatSocketUtils.sendMessage(text);
    }

};