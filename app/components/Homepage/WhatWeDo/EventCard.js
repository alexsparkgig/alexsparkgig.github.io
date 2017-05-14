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
		var card_styles = this.props.style;
		return (
			<div style={card_styles.wrapper}>
				<div style={card_styles.pic}>
					img placeholderasdfasdf
					{/*<img src={this.props.imageLink} />*/}
				</div>
				<div style={card_styles.text_wrapper}>
					<div className="heading"
						 style={card_styles.heading}>
						{this.props.event}
					</div>
					<div className="description"
						 style={card_styles.description}>
						{this.props.description}
					</div>
					<div className="link"
						 onClick={this.seeAvailabilityHander}
						 style={card_styles.cta_text}>
						See Availability
					</div>
				</div>
			</div>
		);
	}
});

module.exports = EventCard