var React = require('react');
var ReactDOM = require('react-dom');

var OurPastEvents = React.createClass({
	render: function() {
		return (
			<h2>Our Past Events</h2>
			<PastEventPics></PastEventPics>
		)	
	}
});

module.exports = OurPastEvents;
