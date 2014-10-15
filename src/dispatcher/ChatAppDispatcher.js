"use strict";

var ChatConstants = require('../constants/ChatConstants');
var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');

var PayloadSources = ChatConstants.PayloadSources;

var ChatAppDispatcher = copyProperties(new Dispatcher(), {
    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the server.
     */
    handleServerAction: function(action) {
        var payload = {
            source: PayloadSources.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    /**
     * @param {object} action The details of the action, including the action's
     * type and additional data coming from the view.
     */
    handleViewAction: function(action) {
        var payload = {
            source: PayloadSources.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }
});

module.exports = ChatAppDispatcher;