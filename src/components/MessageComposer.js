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

    componentDidMount: function() {
        var node = this.refs.textarea.getDOMNode();
        window.onfocus = function() {
            node.focus();
        };
    },

    componentWillUnmount: function() {
        window.onfocus = null;
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
                    ref="textarea"
                    className="textarea"
                    name="message"
                    autoFocus
                    value={this.state.text}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                />
            </div>
        );
    }
});
