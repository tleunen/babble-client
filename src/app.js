/**
 * @jsx React.DOM
 */
"use strict";

var ChatApp = require('./components/ChatApp');
var ChatSocketUtils = require('./utils/ChatSocketUtils');
var UserStorageUtils = require('./utils/UserStorageUtils');
var React = require('react/addons');

// export for http://fb.me/react-devtools
window.React = React;

//ChatSocketUtils.init('localhost:9090');
ChatSocketUtils.init('http://babble-server-demo.herokuapp.com:80');

UserStorageUtils.findUsername();

React.renderComponent(
    <ChatApp />,
    document.getElementById('chatwindow')
);