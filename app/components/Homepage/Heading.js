var React = require('react');

const CTA_button_color = '#53A5E3'
const CTA_hover = '#EDF5FB'

let cta_style = {
	borderRadius: 5,
	width: 170,
	cursor: 'pointer',
	height: 40,
	backgroundColor: "white",
	color: CTA_button_color,
	lineHeight: "40px",
	// alignSelf: 'center',
	// transform: 'translateY(50%)',
}

const wrapper = {
	width: '100%',
	height: "80vh",
	display: 'flex',
	textAlign: 'center',
	backgroundColor: "rgb(110, 179, 211)",
	color: "white",
	flexFlow: 'column nowrap',
	alignItems: 'center',
	alignContent: 'space-between',
	overflow: "hidden",
}

const sparkgig_wrapper = {
	margin: 10,
	alignSelf: 'flex-start'
}

const logo = {
	height: 70,
	width: 150,
	display: "inline-block",
	margin: 20,
}

const text = {
	display: "inline-block",
	fontSize: 24,
	// transform: "translate(0%, 55%)",
}

const heading = {
	fontSize: 40,
	width: "60%",
	marginBottom: 20,
	// alignSelf: 'center',
	// transform: 'translateY(50%)',
}

const tagline = {
	fontSize: 24,
	marginBottom: 40,
	// transform: 'translateY(120%)',
}

const inner_wrapper = {
	alignSelf: 'center',
	display: 'flex',
	alignItems: 'center',
	flexFlow: 'column nowrap',
	marginTop: '2%',
}

var CTA_button = React.createClass({
	getInitialState: function() {
	    return { hovered: false }
	},
	toggleHover: function() {
		this.setState({ hovered: !this.state.hovered })
	},
	viewExperiences: function() {
		// maybe scroll down to "What we do"?
		var element = document.getElementById("whatwedo");
		element.scrollIntoView({block: "end", behavior: "smooth"});
	},
	render: function() {
		(this.state.hovered) ? cta_style.backgroundColor = CTA_hover : cta_style.backgroundColor = 'white'
		return <div style={cta_style} 
					onClick={this.viewExperiences}
					onMouseEnter={this.toggleHover}
					onMouseLeave={this.toggleHover}>View Experiences</div>
	}
})

var sparkgig_logo = "/app/assets/sparkgiglogo.svg"

var Header = React.createClass({
	render: function() {
		return (
			<div style={wrapper}>
				<div style={sparkgig_wrapper}>
					<img style={logo} src={sparkgig_logo} />
					{/*<div style={text}>SparkGig</div>*/}
				</div>
				<div style={inner_wrapper}>
				<div style={heading}>Instantly book amazing performers for a fraction of the cost</div>
				<div style={tagline}>Whether it's a simple holiday office party or birthday</div>
				<CTA_button style={cta_style} onClick={this.viewExperiences} />
				</div>
			</div>
		);
	}
});

module.exports = Header;
