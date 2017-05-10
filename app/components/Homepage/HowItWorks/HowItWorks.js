var React = require('react');
var ReactDOM = require('react-dom');

var HowItWorks = React.createClass({
	render: function() {
		return (
			<h2>How it Works</h2>
			<Step></Step>
			<Step></Step>
			<Step></Step>
			<Step></Step>
		)
	}
});

module.exports = HowItWorks;