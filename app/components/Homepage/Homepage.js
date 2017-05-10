var React = require('react');
var ReactDOM = require('react-dom');

// var Navigation = require('./Navigation.js');
var Header = require('./Heading.js');
var WhatWeDo = require('./WhatWeDo/WhatWeDo.js');
var HowItWorks = require('./HowItWorks/HowItWorks.js');

var HomePage = React.createClass({
	render: function() {
		return (
			<div>
				<Header />
				{
					/*
					<Logos />

					videos:
					<iframe src={}></iframe>

					<OurPastEvents />
					<Locations />
					<Quote />
					*/
				}
				<WhatWeDo />
				<HowItWorks />
			</div>
		)
	}
});

module.exports = HomePage;
// <Navigation />
