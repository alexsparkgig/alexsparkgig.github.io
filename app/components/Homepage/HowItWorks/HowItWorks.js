var React = require('react');
var Step = require('./HowItWorksStep.js');

var howItWorksData = [{
		description: "event1",
		link: "event1link",
		imageLink: "event1imagelink"
	}, {
		description: "event2",
		link: "event2link",
		imageLink: "event2imagelink"
	}, {
		description: "event3",
		link: "event3link",
		imageLink: "event3imagelink"
	}, {
		description: "event4",
		link: "event4link",
		imageLink: "event4imagelink"
	}
];

var HowItWorks = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<h2>How it Works</h2>
				{
					howItWorksData.map(function(data, i) {
						var num = (i+1);
						return (
							<Step key={num}
								  number={num}
								  description={data.description}
								  link={data.link}
								  imageLink={data.imageLink}
								  style={style} />
						)
					})
				}
			</div>
		)
	}
});

module.exports = HowItWorks;
