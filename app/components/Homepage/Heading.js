var React = require('react');

var SparkGigLogo = "";
var Header = React.createClass({
	viewExperiences: function() {
		// maybe scroll down to "What we do"?
		console.log("view experiences");
	},
	render: function() {
		let style = JSON.parse(JSON.stringify(this.props.style));
		let wrapper_style = style.wrapper;
		let sparkgig_style = style.sparkgig;
		return (
			<div style={style.wrapper}>
				<div style={sparkgig_style.wrapper}>
					{/* Logo here: <img src={SparkGigLogo} /> */}
					<div style={sparkgig_style.logo}>logo</div>
					<div style={sparkgig_style.text}>SparkGig</div>
				</div>
				<div style={style.heading}>Stumped on ideas for your event?</div>
				<div style={style.tagline}>Whether it's a blah blah blah blah blah blah blah blah blah blah blah blah blah blah </div>
				<div style={style.cta_button} onClick={this.viewExperiences}>View Experiences</div>
			</div>
		);
	}
});

module.exports = Header;
