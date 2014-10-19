/**
 * @jsx React.DOM
 */
"use strict";

var UserStore = require('../stores/UserStore');
var ChatActionCreators = require('../actions/ChatActionCreators');
var React = require('react/addons');

var ENTER_KEY_CODE = 13;

var UsernameSection = React.createClass({
    getInitialState: function() {
        return {
            username: UserStore.getUsername(),
            gotResponse: false,
            isAuthenticated: false,
            alreadySubmitted: false
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
            gotResponse: true,
            username: UserStore.getUsername(),
            isAuthenticated: UserStore.isAuthenticated()
        });
    },

    _onInputChange: function(event) {
        this.setState({username: event.target.value.trim()});
    },

    _onInputKeyDown: function(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            event.preventDefault();
            this._handleClick();
        }
    },

    _handleClick: function(e) {
        event.preventDefault();
        if(this.state.username) {
            ChatActionCreators.sendUsername(this.state.username);
            this.setState({ alreadySubmitted: true });
        }
    },

    render: function() {
        var errorMessage;

        if(this.state.gotResponse && !this.state.isAuthenticated) {
            errorMessage = <span className="usernameError">The username is not available</span>;
        }

        return (
            <section className="usernameSection">
                <div className="usernameForm">
                    <h3 className="title">What's your username?</h3>
                    <input className="usernameInput"
                        type="text" maxLength="20" autoFocus
                        defaultValue={this.state.username}
                        onChange={this._onInputChange}
                        onKeyDown={this._onInputKeyDown}
                    />
                    {errorMessage}
                    <button className="usernameBtn" type="button" onClick={this._handleClick}>ENTER</button>
                </div>
            </section>
        );
    }
});

module.exports = UsernameSection;