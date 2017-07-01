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
	margin: '4% 30px',
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
		fontSize: '22px',
		height: '33%',
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
		lineHeight: '200%',
		fontWeight: '500',
	},
	description: {
		color: colors.section,
	},
}

let general_style = {
	border: '1px solid #DFE5E9',
	container: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
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
	howItWorks: {
		header: gen_header,
	},
	locations: {
		header: gen_header,
		wrapper: gen_wrapper,
		map: {
			width: '100%',
			height: 400,
			backgroundColor: colors.circle_color,
			marginBottom: 40,
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
				<SparkgigAdvantage />
				<HowItWorks style={general_style.howItWorks} />
				<OurPastEvents style={general_style.ourPastEvents} />
				<OurPerformers />
				<Locations style={general_style.locations} />
				<Quote style={general_style.quote} />
			</div>
		)
	}
});

module.exports = HomePage;
