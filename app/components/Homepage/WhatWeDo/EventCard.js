var React = require('react');

var EventCard = React.createClass({
	propTypes: {
		event: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired
	},
	render() {
		return (
			<div>

				<div className="heading">
					{this.props.event}
				</div>
				<div className="heading">
					{this.props.description}
				</div>

			</div>
		);
	}
});

module.exports = EventCard