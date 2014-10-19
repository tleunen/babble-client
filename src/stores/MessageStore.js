"use strict";

var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');


var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _messages = [];


var MessageStore = merge(EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.addListener(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getAll: function() {
        return _messages;
    },

    convertRawMessage: function(type, rawMessage) {
        return {
            type: type,
            date: new Date(rawMessage.time),
            author: rawMessage.user,
            text: rawMessage.msg
        };
    }
});


MessageStore.dispatchToken = ChatAppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        case ActionTypes.RECEIVE_RAW_MESSAGE:
            _messages.push(MessageStore.convertRawMessage('message', action.rawMessage));
            MessageStore.emitChange();
        break;

        case ActionTypes.RECEIVE_JOIN_MESSAGE:
            action.rawMessage.msg = 'joins the chat.';
            _messages.push(MessageStore.convertRawMessage('join', action.rawMessage));
            MessageStore.emitChange();
        break;

        case ActionTypes.RECEIVE_LEFT_MESSAGE:
            action.rawMessage.msg = 'left the chat.';
            _messages.push(MessageStore.convertRawMessage('left', action.rawMessage));
            MessageStore.emitChange();
        break;

        default:
            // do nothing
    }
});

module.exports = MessageStore;