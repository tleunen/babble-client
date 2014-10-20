/**
 * @jsx React.DOM
 */
"use strict";

var Navigation = require('./Navigation');
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

        var content;
        if(this.state.isAuthenticated) {
            content = [
                <Navigation />,
                <MessageSection />,
                <MessageComposer />
            ];
        }
        else {
            content = <UsernameSection />
        }

        return (
          <div className="chatapp">
            {content}
          </div>
        );
    }
});

module.exports = ChatApp;
