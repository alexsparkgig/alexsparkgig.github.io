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

var general_style = {
	border: '1px solid #DFE5E9',
	cta: {
		color: '#53A5E3'
	},
	section: {
		color: '#64717A'
	},
	body: {
		color: '7A7A7A'
	},
	howItWorks: {
		pic: {
			float: 'left'
		},
		steps: {
			circle: {
				color: 'EAEBEE',
				borderRadius: '100%',
				width: 50
			},
			text: {
				color: '797979'
			},
		}
	},
}

// pale blue: FBFCFF
// White: white

// section (what we do, our locations) title: 64717A
// CTA buttons: 53A5E3

// body text: 7A7A7A

// Circles with numbers representing steps
// - Circle shape: EAEBEE
// - Text inside: 797979

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
// <Navigation />
