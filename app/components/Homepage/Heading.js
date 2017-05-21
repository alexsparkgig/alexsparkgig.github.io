var React = require('react');

const CTA_button_color = '#53A5E3'
const CTA_hover = '#77ABCF'

let cta_style = {
	borderRadius: 5,
	position: "absolute",
	width: 170,
	height: 40,
	backgroundColor: "white",
	top: "60%",
	left: "50%",
	transform: "translate(-50%,0%)",
	color: '#53A5E3',
	lineHeight: "40px",
}

var CTA_button = React.createClass({
	getInitialState: function() {
	    return { hovered: false }
	},
	toggleHover: function() {
		this.setState({ hovered: !this.state.hovered })
	},
	viewExperiences: function() {
		// this change state when hovered
		// maybe scroll down to "What we do"?
		console.log("view experiences???");
	},
	render: function() {
		(this.state.hovered) ? cta_style.color = CTA_hover : cta_style.color = CTA_button_color
		return <div style={cta_style} 
					onClick={this.viewExperiences}
					onMouseEnter={this.toggleHover}
					onMouseLeave={this.toggleHover}>View Experiences</div>
	}
})

var Header = React.createClass({
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
				<CTA_button style={style.cta_button} />
				{/*<div style={style.cta_button} onClick={this.viewExperiences}>View Experiences</div>*/}
			</div>
		);
	}
});

module.exports = Header;
