/**
 * @jsx React.DOM
 */
"use strict";

var React = require('react/addons');

module.exports = React.createClass({
    propTypes: {
        message: React.PropTypes.object
    },

    render: function() {
        var message = this.props.message;

        return (
            <li className="messageItem">
                <div className="messageTime">{message.date.toLocaleTimeString()}</div>
                <div className="messageAuthor">{message.author}</div>
                <div className="messageText">{message.text}</div>
            </li>
        );
    }
});