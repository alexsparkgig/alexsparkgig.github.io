var React = require('react');
var EventCard = require('./../WhatWeDo/EventCard.js');

var eventData = [{
		name: "Quality performers for a fraction of the cost",
		description: "Did you know that other agencies markup the cost of performers by more than 100%? Sparkgig reduces this cost with an agency fee of 20% and passing the savings to you! ",
		link: "event1link",
		imageLink: "/app/assets/TSA1.png"
	}, {
		name: "Professional performers with years of experience",
		description: "All our performers are background checked,  experienced and awesome certified by us. We help you do the screening, so that you know you have the best.",
		link: "event2link",
		imageLink: "/app/assets/TSA2.png"
	}, {
		name: "Great availability and guaranteed attendance",
		description: "With over 200 performers at your disposal, we offer the best availability even during the busy times! With each performer backed up by several others and our amazing team, we guarantee your performers will show up!",
		link: "event3link",
		imageLink: "/app/assets/TSA3.png"
	}
];

let gen_header = {
	color: '#64717A',
	textAlign: 'center',
	fontFamily: 'Helvetica Neue',
	margin: '30px',
	fontSize: '32px',
}

let gen_wrapper = {
	width: '80%',
	textAlign: 'center',
	margin: '0% 10%',
}

const flex_container = {
	display: 'flex',
	flexDirection: 'row',
}

var SparkgigAdvantage = React.createClass({
	render() {
		return (
			<div style={gen_wrapper}>
				<div style={gen_header}>The SparkGig Advantage</div>
				<div style={flex_container}>
				{
					eventData.map(function(data) {
						return (
							<EventCard key={data.name}
									   imageLink={data.imageLink}
									   event={data.name} 
						   			   description={data.description}
						               link={data.link}
						               origin={"SparkgigAdvantage"} />
						);
					})
				}
				</div>
			</div>
		);
	}
});

module.exports = SparkgigAdvantage
