var React = require('react');
var OurPerformersPoint = require('./OurPerformersPoint.js');

var ourPerformersData = [{
		header: "5+ years of experience",
		description: "Our Sparkgig performers are talented and backed with years of experience. From dozens to hundreds of gigs, they have the skills to wow your guests!",
		link: "event1link",
		imageLink: "event1imagelink"
	}, {
		header: "Passionate about Performing",
		description: "Our Sparkgig performers love what they do. Their goal is to create ever lasting memories with your guests and having fun doing what they love. Our performers care and do everything they can to make your event perfect.",
		link: "event2link",
		imageLink: "event2imagelink"
	}, {
		header: "Fully Background checked and qualified",
		description: "All of our Sparkgig performers have been background checked. Whether they’re kids, adults, seniors, we ensure your performers are safe and qualified to work with the people that matter to you.",
		link: "event3link",
		imageLink: "event3imagelink"
	}, {
		header: "Friendly, energetic and amazing",
		description: "Not only are our performers great at what they do, they also have amazing personalities! They love working with people and truly bring the fun to your event!",
		link: "event4link",
		imageLink: "event4imagelink"
	}
];


var OurPerformers = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<div style={style.header}>Our Performers</div>
				{
					ourPerformersData.map(function(content) {
						return (
							<OurPerformersPoint style={style.section}
												header={content.header}
												text={content.description} />
						)
					})	
				}
			</div>
		);
	}
});

module.exports = OurPerformers;
