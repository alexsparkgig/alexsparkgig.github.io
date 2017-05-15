var React = require('react');
var PastEventReview = require('./PastEventReview.js');

var OurPastEvents = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<div style={style.header}>Our Past Events</div>
				<PastEventReview style={style.section} />
				<PastEventReview style={style.section} />
			</div>
		);
	}
});

module.exports = OurPastEvents;
