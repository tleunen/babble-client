/**
 * @jsx React.DOM
 */
"use strict";

var MessageListItem = require('./MessageListItem');
var MessageStore = require('../stores/MessageStore');
var React = require('react/addons');

function getStateFromStores() {
    return {
        messages: MessageStore.getAll()
    };
}

var MessageSection = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        this._scrollToBottom();
        MessageStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        MessageStore.removeChangeListener(this._onChange);
    },

    componentDidUpdate: function() {
        this._scrollToBottom();
    },

    _scrollToBottom: function() {
        var ul = this.refs.messageList.getDOMNode();
        ul.scrollTop = ul.scrollHeight;
    },

    /**
     * Event handler for 'change' events coming from the MessageStore
     */
    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {
        var messageListItems = this.state.messages.map(function(message, index) {
            return <MessageListItem key={index} message={message} />;
        });

        return (
            <ul className="messageList" ref="messageList">
                {messageListItems}
            </ul>
        );
    }
});

module.exports = MessageSection;