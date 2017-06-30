var React = require('react');
var Step = require('./HowItWorksStep.js');

var howItWorksData = [{
		description: "this is a line about what we offer event1",
		link: "event1link",
		imageLink: "event1imagelink"
	}, {
		description: "this is a line about what we offer event2",
		link: "event2link",
		imageLink: "event2imagelink"
	}, {
		description: "this is a line about what we offer event3",
		link: "event3link",
		imageLink: "event3imagelink"
	}, {
		description: "this is a line about what we offer event4",
		link: "event4link",
		imageLink: "event4imagelink"
	}
];


var HowItWorks = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<div style={style.header}>How it Works</div>
				{
					howItWorksData.map(function(data, i) {
						var num = (i+1);
						return (
							<Step key={num}
								  number={num}
								  description={data.description}
								  link={data.link}
								  imageLink={data.imageLink} />
						)
					})
				}
			</div>
		)
	}
});

module.exports = HowItWorks;
