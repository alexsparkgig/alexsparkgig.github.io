var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = require('./Navigation.js');
var Header = require('./Heading.js');

var HomePage = React.createClass({
	render: function() {
		return (
			<Navigation />
			<Header />
		)
	};
});

module.exports = HomePage;
