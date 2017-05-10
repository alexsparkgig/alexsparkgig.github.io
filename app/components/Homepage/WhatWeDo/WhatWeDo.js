var React = require('react');
var EventCard = require('./EventCard.js');

var eventData = [{
		name: "Magic Shows",
		description: "event1",
		link: "event1link"
	}, {
		name: "Face Painting",
		description: "event2",
		link: "event2link"
	}, {
		name: "Balloon Twisting",
		description: "event3",
		link: "event3link"
	}, {
		name: "Superhero Shows"
		description: "event4",
		link: "event4link"
	}
];

var style = {
	border: '1px solid black',
	borderWidth: 1
}

var WhatWeDo = React.createClass({
	render() {
		return (
			<div style={style}>
				<h2>What We Do</h2>
				<div>
					<EventCard event={eventData[0].name]} />
					<EventCard event={eventData[1].name]} />
				</div>
				<div>
					<EventCard event={eventData[2].name]} />
					<EventCard event={eventData[3].name]} />
				</div>
			</div>
		);
	}
});

module.exports = WhatWeDo