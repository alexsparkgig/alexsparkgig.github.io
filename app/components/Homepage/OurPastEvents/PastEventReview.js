var React = require('react');

var PastEventReview = React.createClass({
	render: function() {
		var style_wrapper = this.props.style.wrapper;
		var style_pic = this.props.style.pic;
		var style_text = this.props.style.text_section;
		return (
			<div style={style_wrapper}>
				<div className="pics">
					{/*<img src={} />*/}
					{/*<img src={} />*/}
					{/*<img src={} />*/}
					<div style={style_pic}>placeholder pic</div>
					<div style={style_pic}>placeholder pic</div>
					<div style={style_pic}>placeholder pic</div>
				</div>
				<div style={style_text.review_wrapper}>
					{/*picture: <img src={} />*/}
					<div style={style_text.face_pic}>picture placeholder here</div>
					<div style={style_text.text_wrapper}>
						<div style={style_text.heading}>A great show for kids</div>
						<div style={style_text.description}>blahb albh albh heres the review</div>
						<div style={style_text.description}>- person name </div>
					</div>
				</div>
			</div>
		)	
	}
});

module.exports = PastEventReview;
