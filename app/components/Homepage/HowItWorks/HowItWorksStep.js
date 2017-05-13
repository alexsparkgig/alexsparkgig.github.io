var React = require('react');
var PropTypes = require('prop-types');


var Step = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	render: function() {
		var style_steps = this.props.style.steps;
		var style_pic = this.props.style.pic;

		// (this.props.number % 2 == 0) ? style_pic.float = 'right' : style_pic.float = 'left'

		return (
			<div style={this.props.style.wrapper}>
				{/*<img src={this.props.imageLink}
						style={style_pic} />*/}
				{(this.props.number % 2 == 1) && <div className="img_placeholder" style={style_pic}>raaahdsfgsfg</div>}
				<div className="title_and_desc" style={style_steps.wrapper}>
					<div className="number" style={style_steps.circle}>{this.props.number}</div>
					<div style={style_steps.text_wrapper}>
						<div style={style_steps.heading}>{"Step " + this.props.number}</div>
						<div style={style_steps.description}>{this.props.description}</div>
					</div>
				</div>
				{(this.props.number % 2 == 0) && <div className="img_placeholder" style={style_pic}>raaahdsfgsfg</div>}
			</div>
		)
	}
});

module.exports = Step;
