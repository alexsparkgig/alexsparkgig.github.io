var React = require('react');

var HomePage = require('./Homepage/HomePage.js');
var QuotePage = require('./Quote/OurPerformances.js');

var style = {
	fontFamily: 'Helvetica Neue'
}

var App = React.createClass({
	render: function() {
		return (
			<div className="app" style={style}>
				<HomePage />
				{/*<QuotePage />*/}
			</div>
			// <Header />
		)
	}
});

module.exports = App;
