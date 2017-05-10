var React = require('react');
var PropTypes = require('prop-types');

var EventCard = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		event: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	seeAvailabilityHander: function() {
		// this.setState({this.props.link});
	},
	render() {
		return (
			<div>
				{/*<img src={this.props.imageLink} />*/}
				<div className="heading">
					{this.props.event}
				</div>
				<div className="description">
					{this.props.description}
				</div>
				<div className="link" onClick={this.seeAvailabilityHander}>
					See Availability
				</div>
			</div>
		);
	}
});

module.exports = EventCard