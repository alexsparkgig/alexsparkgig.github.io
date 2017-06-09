var React = require('react');

var PastEventReview = React.createClass({
	render: function() {
		let style_wrapper = JSON.parse(JSON.stringify(this.props.style.wrapper));
		let style_pic = JSON.parse(JSON.stringify(this.props.style.pic));
		let style_text = JSON.parse(JSON.stringify(this.props.style.text_section));
		style_wrapper.overflow = 'auto';
		style_pic.float = 'left';
		style_text.review_wrapper.float = 'left';
		style_text.review_wrapper.width = '90%';
		style_text.review_wrapper.height = 150;
		style_text.review_wrapper.margin = '0% 5%'

		return (
			<div style={style_wrapper}>
				{/*<div style={style_pic}>placeholder pic</div>*/}
				<div style={style_text.review_wrapper}>
					<div style={style_text.text_wrapper}>
						<div style={style_text.heading}>{this.props.number}. {this.props.header}</div>
						<div style={style_text.description}>{this.props.text}</div>
						{/*<div style={style_text.description}>- person name </div>*/}
					</div>
				</div>
			</div>
		)	
	}
});

module.exports = PastEventReview;
