var React = require('react');
var ReactDOM = require('react-dom');

// var Navigation = require('./Navigation.js');
var Header = require('./Heading.js');
var WhatWeDo = require('./WhatWeDo/WhatWeDo.js');
var HowItWorks = require('./HowItWorks/HowItWorks.js');
var OurPastEvents = require('./OurPastEvents/OurPastEvents.js');
var Locations = require('./Locations/Locations.js');
var Logos = require('./Logos/Logos.js');
var Quote = require('./Quote/Quote.js');


var colors = {
	section: '#64717A', // (what we do, our locations) section title
	pale_blue: '#FBFCFF',
	body_text: '#7A7A7A',
	circle_color: '#EAEBEE',
	circle_text: '#797979',
	CTA_buttons: '#53A5E3',
	white: 'white',
}

var gen_header = {
	color: colors.section,
	textAlign: 'center',
	fontFamily: 'Helvetica Neue',
	margin: '40px',
	fontSize: '32px'
}

var general_style = {
	border: '1px solid #DFE5E9',
	cta: {
		color: '#53A5E3'
	},
	section: {
		color: colors.section
	},
	body: {
		color: '7A7A7A'
	},
	whatWeDo: {
		header: gen_header,
		wrapper: {
			width: '100%',
			textAlign: 'center',
		},
		card: {
			wrapper: {
				border: '1px solid #DFE5E9',
				height: 500,
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
				textAlign: 'left'
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
		},
	},
	howItWorks: {
		header: gen_header,
		wrapper: {
			display: 'block',
			width: '100%',
			height: 250,
			textAlign: 'center',
			marginTop: '50px'
		},
		pic: {
			float: 'left',
			borderRadius: '25px',
			backgroundColor: colors.circle_color,
			width: 300,
			height: '80%',
			display: 'inline-block',
			marginLeft: '10%',
			marginRight: '10%',
			// boxSizing: 'border-box',
			// marginRight: 'auto'
		},
		steps: {
			wrapper: {
				float: 'left',
				height: '80%',
				// width: '40%',
				display: 'inline-block',
				boxSizing: 'border-box',
				// marginRight: 'auto',
				marginLeft: '5%',
			},
			// display: 'flex',
			// justifyContent: 'center',
			// alignItems: 'center'
			// border: '1px solid #DFE5E9',
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
				verticalAlign: 'top'
			},
			text_wrapper: {
				display: 'inline-block',
				marginLeft: '30px',
				height: 75,
				textAlign: 'left',
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
}

var HomePage = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				<Logos />
				{
					/*
					

					videos:
					<iframe src={}></iframe>
					*/
				}
				<WhatWeDo style={general_style.whatWeDo} />
				<HowItWorks style={general_style.howItWorks} />
				<OurPastEvents />
				<Locations />
				<Quote />
			</div>
		)
	}
});

module.exports = HomePage;
