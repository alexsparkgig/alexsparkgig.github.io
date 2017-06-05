var React = require('react');
var EventCard = require('./../WhatWeDo/EventCard.js');

var eventData = [{
		name: "Magic Shows",
		description: "event1 asd lf ka sd fl ;kjas d;flkj asdlf kjhsa dflgk jhda f g l kjhas d;flh jasd fl;g hjk asf",
		link: "event1link",
		imageLink: "event1imagelink"
	}, {
		name: "Face Painting",
		description: "event2 asd lf ka sd fl ;kjas d;flkj asdlf kjhsa dflgk jhda f g l kjhas d;flh jasd fl;g hjk asff",
		link: "event2link",
		imageLink: "event2imagelink"
	}, {
		name: "Balloon Twisting",
		description: "event3 asd lf ka sd fl ;kjas d;flkj asdlf kjhsa dflgk jhda f g l kjhas d;flh jasd fl;g hjk asf",
		link: "event3link",
		imageLink: "event3imagelink"
	}
];

var SparkgigAdvantage = React.createClass({
	render() {
		var style = JSON.parse(JSON.stringify(this.props.style));
		style.card.wrapper.width = '28%';
		style.card.wrapper.margin = '2%';

		return (
			<div style={style.wrapper}>
				<div style={style.header}>The SparkGig Advantage</div>
				<div>
					{
						eventData.map(function(data) {
							return (
								<EventCard key={data.name}
										   imageLink={data.imageLink}
										   event={data.name} 
							   			   description={data.description}
							               link={data.link}
							               style={style.card} />
							);
						})
					}
				</div>
			</div>
		);
	}
});

module.exports = SparkgigAdvantage
