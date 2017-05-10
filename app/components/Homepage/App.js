var React = require('react');

var HomePage = require('./HomePage.js');

var style = {
	border: '1px solid black',
	fontFamily: 'Helvetica Neue'
}

var App = React.createClass({
	render: function() {
		return (
			<div className="app" style={style}>
				<HomePage />
			</div>
			// <Navigation />
			// <Header />
		)
	}
});

module.exports = App;
