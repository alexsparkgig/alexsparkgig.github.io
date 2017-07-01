var React = require('react');

let gen_wrapper = {
	width: '80%',
	textAlign: 'center',
	margin: '0% 10%',
}

const pic = {
	margin: '2px',
	width: '30%',
	height: 225,
	display: 'inline-block',
	boxShadow: '0px 5px 10px rgba(115, 114, 114, 0.16)',
}

const review_wrapper = {
	margin: '3% 0% 0% 15%',
	width: '80%',
	height: 200,
	display: 'flex',
}

const text_wrapper = {
	margin: '0% 3%',
	float: 'left',
	textAlign: 'left',
}

const face_pic = {
	borderRadius: '100%',
	width: 110,
	height: 110,
	float: 'left',
	margin: '2% 0%',
}

const heading = {
	color: 'black',
	fontSize: '25px',
	height: '33%',
	lineHeight: '200%',
	fontWeight: '500',
}

const description = {
	color: '#64717A',
}

const style_pic = {
	backgroundColor: '#EAEBEE',
	margin: '2px',
	width: '30%',
	height: 225,
	display: 'inline-block',
	boxShadow: '0px 5px 10px rgba(115, 114, 114, 0.16)',
}

var PastEventReview = React.createClass({
	render: function() {
		return (
			<div style={gen_wrapper}>
				<div className="pics">
					<img src={this.props.image1} style={style_pic} />
					<img src={this.props.image2} style={style_pic} />
					<img src={this.props.image3} style={style_pic} />
				</div>
				<div style={review_wrapper}>
					{/*picture: <div style={face_pic}>picture placeholder here</div> <img src={} />*/}
					<div style={text_wrapper}>
						<div style={heading}>{this.props.name}</div>
						<div style={description}>{this.props.description}</div>
						<div style={description}><i>{this.props.person_name}</i></div>
					</div>
				</div>
			</div>
		)	
	}
});

module.exports = PastEventReview;
