var React = require('react');
var PropTypes = require('prop-types');

var Step = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	render: function() {
		return (
			<div>
				{/*<img src={this.props.imageLink} />*/}
				<div className="number">{this.props.name}</div>
				<div>{"Step " + this.props.name}</div>
				<div>{this.props.description}</div>
			</div>
		)
	}
});

module.exports = Step;
