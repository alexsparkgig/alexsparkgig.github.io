var React = require('react');
var PropTypes = require('prop-types');

var Step = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	render: function() {
		if (this.props.number % 2 == 0) {
			// this.props.style.HowItWorks.pic.float = 'right';
		}
		var style_steps = this.props.style.steps;
		var style_pic = this.props.style.pic;
		return (
			<div>
				{/*<img src={this.props.imageLink}
						style={style_pic} />*/}
				<div className="number">{this.props.number} style={style_pic.circle}</div>
				<div>{"Step " + this.props.number}</div>
				<div>{this.props.description}</div>
			</div>
		)
	}
});

module.exports = Step;
