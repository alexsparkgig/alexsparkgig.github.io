var React = require('react');
var Step = require('./HowItWorksStep.js');

var howItWorksData = [{
		title: "Tell us about your event!",
		description: "Select the date and time you would like your performer to show up.",
		imageLink: "https://github.com/alexsparkgig/alexsparkgig.github.io/blob/master/app/assets/Group%2025.png?raw=true"
	}, {
		title: "Select the perfect package for you.",
		description: "Instantly see all our package prices, and availability. ",
		imageLink: "https://github.com/alexsparkgig/alexsparkgig.github.io/blob/master/app/assets/Group%206.png?raw=true"
	}, {
		title: "Reserve your performers.",
		description: "We will confirm your performer(s) electronically and securely via a small deposit",
		imageLink: "https://github.com/alexsparkgig/alexsparkgig.github.io/blob/master/app/assets/Group%2024.png?raw=true"
	}, {
		title: "Your performers are confirmed!",
		description: "Sit back and relax. We’ll take the entertainment from here. You will receive consistent reminders from us till the special day.",
		imageLink: "https://github.com/alexsparkgig/alexsparkgig.github.io/blob/master/app/assets/Group%2030.png?raw=true"
	}
];

const gen_wrapper = {
	marginBottom: '3%',
}

var HowItWorks = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div style={gen_wrapper}>
				<div style={style.header}>How it Works</div>
				{
					howItWorksData.map(function(data, i) {
						var num = (i+1);
						return (
							<Step key={num}
								  number={num}
								  title={data.title}
								  description={data.description}
								  imageLink={data.imageLink} />
						)
					})
				}
			</div>
		)
	}
});

module.exports = HowItWorks;
