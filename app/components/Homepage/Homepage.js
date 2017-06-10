var React = require('react');
var ReactDOM = require('react-dom');

// var Navigation = require('./Navigation.js');
var Header = require('./Heading.js');
var Logos = require('./Logos/Logos.js');
var WhatWeDo = require('./WhatWeDo/WhatWeDo.js');
var SparkgigAdvantage = require('./SparkgigAdvantage/SparkgigAdvantage.js');
var HowItWorks = require('./HowItWorks/HowItWorks.js');
var OurPastEvents = require('./OurPastEvents/OurPastEvents.js');
var OurPerformers = require('./OurPerformers/OurPerformers.js');
var Locations = require('./Locations/Locations.js');
var Quote = require('./Quote/Quote.js');


var colors = {
	section: '#64717A', // (what we do, our locations) section title
	pale_blue: '#FBFCFF',
	body_text: '#7A7A7A',
	circle_color: '#EAEBEE',
	circle_text: '#797979',
	CTA_buttons: '#53A5E3',
	CTA_hover: '#77ABCF',
	white: 'white',
}

let gen_header = {
	color: colors.section,
	textAlign: 'center',
	fontFamily: 'Helvetica Neue',
	margin: '40px',
	fontSize: '32px'
}

let gen_wrapper = {
	width: '80%',
	textAlign: 'center',
	margin: '0% 10%',
}

let gen_card = {
	wrapper: {
		border: '1px solid #DFE5E9',
		height: 400,
		width: '35%',
		borderRadius: 5,
		margin: '5%',
		display: 'inline-block'
	},
	pic: {
		backgroundColor: colors.circle_color,
		width: '100%',
		height: '60%'
	},
	text_wrapper: {
		marginLeft: 20,
		height: '40%',
		textAlign: 'left',
	},
	heading: {
		color: 'black',
		fontSize: '25px',
		height: '33%',
		lineHeight: '300%',
		fontWeight: '500',
	},
	description: {
		color: colors.section,
		height: '44%',
	},
	cta_text: {
		color: colors.CTA_buttons,
		height: '23%',
		fontWeight: '500',
	},
}

let gen_text_section = {
	review_wrapper: {
		margin: '3% 0% 0% 5%',
		width: '100%',
		height: 200,
	},
	text_wrapper: {
		margin: '0% 3%',
		float: 'left',
		textAlign: 'left',
	},
	face_pic: {
		borderRadius: '100%',
		backgroundColor: colors.circle_color,
		width: 110,
		height: 110,
		float: 'left',
		margin: '2% 0%'
	},
	heading: {
		color: 'black',
		fontSize: '25px',
		height: '33%',
		lineHeight: '300%',
		fontWeight: '500',
	},
	description: {
		color: colors.section,
	}
}

let general_style = {
	border: '1px solid #DFE5E9',
	container: {
		textAlign: 'center'
	},
	cta: {
		color: '#53A5E3'
	},
	section: {
		color: colors.section,
	},
	body: {
		color: '#7A7A7A',
	},
	homePage: {
		wrapper: {
			width: '100%',
			height: "100vh",
			textAlign: 'center',
			backgroundColor: "rgb(110, 179, 211)",
			color: "white",
			position: "relative",
			overflow: "hidden",
		},
		sparkgig: {
			wrapper: {
				width: 200,
				margin: 10,
			},
			logo: {
				backgroundColor: colors.white,
				borderRadius: "100%",
				height: 50,
				width: 50,
				display: "inline-block",
				margin: 10,
			},
			text: {
				display: "inline-block",
				fontSize: 24,
				transform: "translate(0%, 55%)",
			},
		},
		heading: {
			fontSize: 40,
			position: "absolute",
			width: "60%",
			top: "20%",
			left: "50%",
			transform: "translate(-50%,0%)",
		},
		tagline: {
			fontSize: 24,
			width: "65%",
			position: "absolute",
			top: "40%",
			left: "50%",
			transform: "translate(-50%,0%)",
		}
	},
	logos: {
		wrapper: gen_wrapper,
		logo_pic: {
			display: 'inline-block',
			verticalAlign: 'middle',
			width: 200,
			height: '100%',
			backgroundColor: colors.circle_color,
		},
	},
	whatWeDo: {
		header: gen_header,
		wrapper: gen_wrapper,
		video: {
			height: 500,
			width: '80%',
		},
		card: gen_card,
	},
	sparkgigAdvantage: {
		header: gen_header,
		wrapper: gen_wrapper,
		card: gen_card,
	},
	howItWorks: {
		header: gen_header,
		wrapper: {
			display: 'block',
			width: '100%',
			height: 250,
			textAlign: 'center',
			margin: '0% 20%',
		},
		pic: {
			float: 'left',
			borderRadius: '25px',
			backgroundColor: colors.circle_color,
			width: "25%",
			height: '80%',
			display: 'inline-block',
		},
		steps: {
			wrapper: {
				float: 'left',
				height: '80%',
				width: '40%',
				display: 'inline-block',
				position: 'relative',
			},
			circle: {
				backgroundColor: colors.circle_color,
				color: colors.circle_text,
				borderRadius: '100%',
				width: 50,
				height: 50,
				textAlign: 'center',
				lineHeight: '50px',
				fontSize: '150%',
				display: 'inline-block',
				position: 'absolute',
				top: '50%',
				left: '0%',
				transform: 'translate(0%, -50%)',
			},
			text_wrapper: {
				display: 'inline-block',
				height: 75,
				textAlign: 'left',
				position: 'absolute',
				top: '50%',
				left: '15%',
				transform: 'translate(0%, -50%)',
			},
			heading: {
				color: 'black',
				fontSize: '30px'
			},
			description: {
				color: colors.section,
				fontSize: '20px'	
			}
		}
	},
	ourPastEvents: {
		header: gen_header,
		section: {
			wrapper: gen_wrapper,
			pic: {
				backgroundColor: colors.circle_color,
				margin: '2px',
				width: '30%',
				height: 225,
				display: 'inline-block',
				boxShadow: '0px 5px 10px rgba(115, 114, 114, 0.16)',
			},
			text_section: gen_text_section,
		}
	},
	ourPerformers: {
		header: gen_header,
		section: {
			wrapper: gen_wrapper,
			pic: {
				backgroundColor: colors.circle_color,
				margin: '2px',
				width: 125,
				height: 100,
				display: 'inline-block',
				boxShadow: '0px 5px 10px rgba(115, 114, 114, 0.16)',
				float: 'left',
			},
			text_section: gen_text_section,
		},
	},
	locations: {
		header: gen_header,
		section: {
			wrapper: gen_wrapper,
		},
	},
	quote: {
		header: gen_header,
		section: {
			wrapper: gen_wrapper,
		},
	},
}

var HomePage = React.createClass({
	render: function() {
		return (
			<div style={general_style.container}>
				<Header style={general_style.homePage} />
				<Logos style={general_style.logos} />
				<WhatWeDo style={general_style.whatWeDo} />
				<SparkgigAdvantage style={general_style.sparkgigAdvantage} />
				<HowItWorks style={general_style.howItWorks} />
				<OurPastEvents style={general_style.ourPastEvents} />
				<OurPerformers style={general_style.ourPerformers} />
				<Locations style={general_style.locations} />
				<Quote style={general_style.quote} />
			</div>
		)
	}
});

module.exports = HomePage;
