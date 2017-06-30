var React = require('react');
var PastEventReview = require('./PastEventReview.js');

var eventData = [{
		name: "Trusted by the biggest brands",
		description: "The performers were absolutely amazing! I couldn't ask for better, the director of the Ottawa and Montreal stores was super impressed by their personality, consistency and interaction with the customers.",
		person_name: " - Lisa Honkanen, Event Planner, Pizza Pizza",
		link: "event1link",
		imageLink: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	}, {
		name: "Trusted by Moms",
		description: "I cannot say enough good things about this performer! She was amazing and in character right from the start! Professional and fun all the way through the event! There weren't too many kids there, and sometimes it is hard to keep a 3 year olds attention, but she was amazing start to finish! A++ for performance! Booking through Sparkgig was easy and stress free!",
		person_name: " - Meagan Fenske",
		link: "event2link",
		imageLink: "http://www.zoomentertainment.com.au/images/entertainers/facepainter-sarah-melbourne.jpg"
	}
];

let gen_header = {
	color: '#64717A',
	textAlign: 'center',
	fontFamily: 'Helvetica Neue',
	margin: '30px',
	fontSize: '32px',
}

var OurPastEvents = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<div style={gen_header}>Our Past Events</div>
				{
					eventData.map(function(content, i) {
						return (
							<PastEventReview name={content.name} 
											 description={content.description}
											 person_name={content.person_name} />
						)
					})
				}
			</div>
		);
	}
});

module.exports = OurPastEvents;
