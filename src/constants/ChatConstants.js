"use strict";

var keyMirror = require('react/lib/keyMirror');

module.exports = {
    ActionTypes: keyMirror({
        RECEIVE_RAW_MESSAGE: null,

        RECEIVE_USERNAME_RESPONSE: null,

        RECEIVE_ADD_USER: null,
        RECEIVE_REMOVE_USER: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};