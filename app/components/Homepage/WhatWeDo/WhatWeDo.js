var React = require('react');
var EventCard = require('./EventCard.js');

var eventData = [{
		name: "Magic Shows",
		description: "event1",
		link: "event1link",
		imageLink: "event1imagelink"
	}, {
		name: "Face Painting",
		description: "event2",
		link: "event2link",
		imageLink: "event2imagelink"
	}, {
		name: "Balloon Twisting",
		description: "event3",
		link: "event3link",
		imageLink: "event3imagelink"
	}, {
		name: "Superhero Shows",
		description: "event4",
		link: "event4link",
		imageLink: "event4imagelink"
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
					{
						eventData.map(function(data) {
							return (
								<EventCard key={data.name}
										   imageLink={data.imageLink}
										   event={data.name} 
							   			   description={data.description}
							               link={data.link}
							               style={style} />
							);
						})
					}
				</div>
			</div>
		);
	}
});

module.exports = WhatWeDo
