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
    },

    receiveUserList: function(userList) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_USER_LIST,
            userList: userList
        });
    },

    receiveJoinMessage: function(rawMessage) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_JOIN_MESSAGE,
            rawMessage: rawMessage
        });
    },

    receiveLeftMessage: function(rawMessage) {
        ChatAppDispatcher.handleServerAction({
            type: ActionTypes.RECEIVE_LEFT_MESSAGE,
            rawMessage: rawMessage
        });
    }

};