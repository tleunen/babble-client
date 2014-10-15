"use strict";

var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
//var ChatMessageUtils = require('../utils/ChatMessageUtils');
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

    convertRawMessage: function(rawMessage) {
        return {
            type: rawMessage.type,
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
            _messages.push(MessageStore.convertRawMessage(action.rawMessage));
            MessageStore.emitChange();
        break;

        /*
        case ActionTypes.CREATE_MESSAGE:
            var message = MessageStore.getCreatedMessageData(action.text);
            _messages[message.id] = message;
            MessageStore.emitChange();
        break;
        */

        default:
            // do nothing
    }
});

module.exports = MessageStore;