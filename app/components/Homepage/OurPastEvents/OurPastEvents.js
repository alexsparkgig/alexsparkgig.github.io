var React = require('react');
var PastEventReview = require('./PastEventReview.js');

var OurPastEvents = React.createClass({
	render: function() {
		return (
			<div>
				<h2>Our Past Events</h2>
				<PastEventReview />
				<PastEventReview />
			</div>
		);
	}
});

module.exports = OurPastEvents;
