var React = require('react');

var SparkGigLogo = "";
var Header = React.createClass({
	viewExperiences: function() {
		console.log("view experiences");
	},
	render: function() {
		return (
			<div>
				<div>
					{/* Logo here: <img src={SparkGigLogo} /> */}
					SparkGig
				</div>
				<h1>Stumped on ideas for your event?</h1>
				<div>spark gig got u m8</div>
				<div onClick={this.viewExperiences}>View Experiences</div>
			</div>
		);
	}
});

module.exports = Header;
