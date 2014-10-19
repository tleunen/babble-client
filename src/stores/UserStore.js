"use strict";

var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var ChatConstants = require('../constants/ChatConstants');
var EventEmitter = require('events').EventEmitter;
var merge = require('react/lib/merge');


var ActionTypes = ChatConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _users = [];
var _currentUsername = ''; // Name of the user who use the app
var _isAuthenticated = false;

var UserStore = merge(EventEmitter.prototype, {

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.addListener(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    isAuthenticated: function() {
        return _isAuthenticated;
    },

    getUsername: function() {
        return _currentUsername;
    },

    getAll: function() {
        return _users;
    }
});


UserStore.dispatchToken = ChatAppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {

        case ActionTypes.RECEIVE_USERNAME_RESPONSE:
            _isAuthenticated = action.isAuthenticated;
            _currentUsername = action.username;
            UserStore.emitChange();
        break;

        case ActionTypes.RECEIVE_USER_LIST:
            action.userList.forEach(function(user) {
                _users.push(user);
            });
            UserStore.emitChange();
        break;

        case ActionTypes.RECEIVE_JOIN_MESSAGE:
            _users.push(action.rawMessage.user);
            UserStore.emitChange();
        break;

        case ActionTypes.RECEIVE_LEFT_MESSAGE:
            var idx = _users.indexOf(action.rawMessage.user);
            if(idx > -1) {
                _users.splice(idx, 1);
            }
            UserStore.emitChange();
        break;

        default:
            // do nothing
    }
});

module.exports = UserStore;