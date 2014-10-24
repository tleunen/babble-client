/**
 * @jsx React.DOM
 */
"use strict";

var Config = require('../config');
var Autolinker = require( 'autolinker' );
var React = require('react/addons');


var AL = new Autolinker({
    truncate: Config.URL_MAX_CHAR,
    twitter: Config.TWITTER_HANDLE_AUTO_LINK
});

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

        var messageContent = AL.link(message.text);

        return (
            <li className={cx(classes)}>
                <span className="messageTime">{message.date.toLocaleTimeString()}</span>
                <span className="messageAuthor">{message.author}</span>
                <span className="messageText" dangerouslySetInnerHTML={{__html: messageContent}} />
            </li>
        );
    }
});
