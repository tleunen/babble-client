/**
 * @jsx React.DOM
 */
"use strict";

var UserStore = require('../stores/UserStore');
var React = require('react/addons');

function getStateFromStores() {
    return {
        users: UserStore.getAll()
    };
}

var UserSection = React.createClass({

    propTypes: {
        isOpen: React.PropTypes.bool.isRequired
    },

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            'userSection': true,
            'opened': this.props.isOpen
        });

        var users = this.state.users.map(function(user, index) {
            return <li className="userItem" key={index}>{user}</li>;
        });

        return (
            <div className={classes}>
                <h2>Users</h2>
                <ul className="userList">
                    {users}
                </ul>
            </div>
        );
    }
});

module.exports = UserSection;