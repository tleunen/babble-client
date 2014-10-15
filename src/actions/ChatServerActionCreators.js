"use strict";

var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');

var ActionTypes = ChatConstants.ActionTypes;

module.exports = {

    receiveRawMessage: function(rawMessage) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_RAW_MESSAGE,
            rawMessage: rawMessage
        });
    },

    receiveUsername: function(username, isAuthenticated) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_USERNAME_RESPONSE,
            username: username,
            isAuthenticated: isAuthenticated || false
        });
    }

};