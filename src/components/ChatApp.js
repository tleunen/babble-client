/**
 * @jsx React.DOM
 */
"use strict";

var MessageSection = require('./MessageSection');
var MessageComposer = require('./MessageComposer');
var UsernameSection = require('./UsernameSection');
var UserStore = require('../stores/UserStore');
var React = require('react/addons');

var ChatApp = React.createClass({

    getInitialState: function() {
        return {
            isAuthenticated: false
        };
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState({
            isAuthenticated: UserStore.isAuthenticated()
        });
    },

    render: function() {

        var usernameSection;
        if(!this.state.isAuthenticated) {
            usernameSection = <UsernameSection />;
        }

        return (
          <div className="chatapp">
            <MessageSection />
            <MessageComposer />
            {usernameSection}
          </div>
        );
    }
});

module.exports = ChatApp;