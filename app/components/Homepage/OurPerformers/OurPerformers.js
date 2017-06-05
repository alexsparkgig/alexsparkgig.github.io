var React = require('react');
var OurPerformersPoint = require('./OurPerformersPoint.js');

var OurPerformers = React.createClass({
	render: function() {
		var style = this.props.style;
		return (
			<div>
				<div style={style.header}>Our Performers</div>
				<OurPerformersPoint style={style.section} />
				<OurPerformersPoint style={style.section} />
				<OurPerformersPoint style={style.section} />
				<OurPerformersPoint style={style.section} />
			</div>
		);
	}
});

module.exports = OurPerformers;
