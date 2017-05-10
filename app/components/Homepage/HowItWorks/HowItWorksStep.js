var React = require('react');
var ReactDOM = require('react-dom');

var Step = React.createClass({
	render: function() {
		return (
			<img src={} />
			<div className="number">{this.props.number}</div>
			<div>This is the {} step:</div>
			<div>This is a line about the type of show we offer.</div>
		)
	}
});

module.exports = Step;