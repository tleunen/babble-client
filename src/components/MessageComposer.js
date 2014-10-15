/**
 * @jsx React.DOM
 */
"use strict";

var ChatActionCreators = require('../actions/ChatActionCreators');
var React = require('react/addons');

var ENTER_KEY_CODE = 13;

module.exports = React.createClass({

    getInitialState: function() {
        return {text: ''};
    },

    _onChange: function(event, value) {
        this.setState({text: event.target.value});
    },

    _onKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            var text = this.state.text.trim();
            if(text) {
                ChatActionCreators.createMessage(text);
            }
            this.setState({text: ''});
        }
    },

    render: function() {
        return (
            <div className="messageComposer">
                <textarea
                    className="textarea"
                    name="message"
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                />
            </div>
        );
    }
});