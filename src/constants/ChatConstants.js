"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = {
    ActionTypes: keyMirror({
        RECEIVE_RAW_MESSAGE: null,
        RECEIVE_JOIN_MESSAGE: null,
        RECEIVE_LEFT_MESSAGE: null,

        RECEIVE_USERNAME_RESPONSE: null,

        RECEIVE_USER_LIST: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};