/**
 * @jsx React.DOM
 */
"use strict";

var UserSection = require('./UserSection');
var React = require('react/addons');

var Navigation = React.createClass({

    getInitialState: function() {
        return {
            isOpen: false
        };
    },

    _onHgClick: function() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    },

    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            'hamburger-icon': true,
            'close': this.state.isOpen
        });

        return (
            <nav>
                <UserSection isOpen={this.state.isOpen} />
                <button className={classes} type="button" onClick={this._onHgClick}>
                    <span className="lines"></span>
                </button>
            </nav>
        );
    }
});

module.exports = Navigation;