/**
 * @jsx React.DOM
 */
"use strict";

var ChatApp = require('./components/ChatApp');
var ChatSocketUtils = require('./utils/ChatSocketUtils');
var UserStorageUtils = require('./utils/UserStorageUtils');
var Config = require('./config');
var React = require('react/addons');

// export for http://fb.me/react-devtools
window.React = React;

ChatSocketUtils.init(Config.SOCKET_URL);

UserStorageUtils.findUsername();

React.renderComponent(
    <ChatApp />,
    document.getElementById('chatwindow')
);
