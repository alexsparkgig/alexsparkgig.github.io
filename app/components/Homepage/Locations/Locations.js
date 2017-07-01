var React = require('react');

var map = "/app/assets/map.png"

const map_style = {
	width: '100%',
}

var Locations = React.createClass({
	render: function() {
		let style = this.props.style;
		return (
			<div>
				<div style={style.header}>Available across Southwestern Ontario!</div>
				<img src={map} style={map_style} />
			</div>
		)	
	}
});

module.exports = Locations;
