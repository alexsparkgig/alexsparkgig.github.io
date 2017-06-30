var React = require('react');

var Locations = React.createClass({
	render: function() {
		let style = this.props.style;
		return (
			<div>
				<div style={style.header}>Available across Southwestern Ontario!</div>
				<div style={style.map}></div>
				{/*<img src={} />*/}
			</div>
		)	
	}
});

module.exports = Locations;
