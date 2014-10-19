/**
 * @jsx React.DOM
 */
"use strict";

var Autolinker = require( 'autolinker' );
var React = require('react/addons');

module.exports = React.createClass({
    propTypes: {
        message: React.PropTypes.object
    },

    render: function() {
        var message = this.props.message;

        var cx = React.addons.classSet;
        var classes = {
            'messageItem': true,
        };
        classes[message.type] = true;

        var messageContent = Autolinker.link(message.text);

        return (
            <li className={cx(classes)}>
                <div className="messageTime">{message.date.toLocaleTimeString()}</div>
                <div className="messageAuthor">{message.author}</div>
                <div className="messageText" dangerouslySetInnerHTML={{__html: messageContent}} />
            </li>
        );
    }
});