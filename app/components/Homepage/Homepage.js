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
	howItWorks: {
		pic: {
			float: 'left'
		},
		steps: {
			// display: 'flex',
			// justifyContent: 'center',
			// alignItems: 'center'
			// border: '1px solid #DFE5E9',
			circle: {
				backgroundColor: colors.circle_color,
				color: colors.section,
				borderRadius: '100%',
				width: 50,
				height: 50,
				textAlign: 'center',
				lineHeight: '50px',
				fontSize: '150%',
			},
			text: {
				color: colors.circle_text
			},
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
				<WhatWeDo />
				<HowItWorks style={general_style.howItWorks} />
				<OurPastEvents />
				<Locations />
				<Quote />
			</div>
		)
	}
});

module.exports = HomePage;
