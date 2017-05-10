var React = require('react');
var ReactDOM = require('react-dom');

var HomePage = require('./HomePage.js');

var App = React.createClass({
	render: function() {
		return (
			<Navigation />
			<Header />
			<HomePage />
		)
	};
});

module.exports = App;
