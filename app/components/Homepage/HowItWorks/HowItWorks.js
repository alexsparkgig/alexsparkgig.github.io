var React = require('react');
var ReactDOM = require('react-dom');

var HowItWorks = React.createClass({
	render: function() {
		return (
			<div>
				<h2>How it Works</h2>
				<Step></Step>
				<Step></Step>
				<Step></Step>
				<Step></Step>
			</div>
		)
	}
});

module.exports = HowItWorks;