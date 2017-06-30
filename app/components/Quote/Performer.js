var React = require('react');
var ReactDOM = require('react-dom');

const CTA_button_color = '#53A5E3'
const CTA_hover = '#77ABCF'

let cta_style = {
	borderRadius: 5,
	position: "absolute",
	width: 170,
	height: 40,
	backgroundColor: CTA_button_color,
	// top: "50%",
	// left: "50%",
	// transform: "translate(-50%,0%)",
	color: 'white',
	lineHeight: "40px",
	textAlign: 'center',
}

const gen_header = {
	color: '#64717A',
	textAlign: 'center',
	fontFamily: 'Helvetica Neue',
	margin: '10px',
	fontSize: '25px'
}

const rate_wrapper = {

}

const rate_style = {
	display: 'inline-block',

}

const desc_style = {

}

const img_style = {
	backgroundColor: '#53A5E3',
	display: 'inline-block',
	width: 300,
	height: 300,
	float: 'left',
	borderRadius: '5px',
}

const content_wrapper = {
	display: 'inline-block',
	width: 300,
	height: 300,
	float: 'left',
	marginLeft: 50,
}

let gen_wrapper = {
	width: '80%',
	margin: '0% 20%',
	overflow: 'auto',
	height: 400,
}

var Performer = React.createClass({
	CTA: function() {

	},
	render: function() {
		let data = this.props.data;
		let { name, first_hr, next_hr, hr_min, first_p, sec_p, third_p, link, image_link } = data;
		return (
			<div style={gen_wrapper}>
				<div style={img_style}>qw</div>
				<div style={content_wrapper}>
					<div style={gen_header}>{name}</div>
					<div style={rate_wrapper}>
						<div style={rate_style}>
							{first_hr}
							<div>First hour</div>
						</div>
						<div style={rate_style}>
							{next_hr}
							<div>Every hour after that</div>
						</div>
						<div style={rate_style}>
							{hr_min} hours
							<div>Minimum</div>
						</div>
					</div>
					<div>
						{first_p}<br/>
						{sec_p}<br/>
						{third_p}<br/>
					</div>
					<div onClick={this.CTA} style={cta_style}>
						Book Now
					</div>
				</div>
			</div>
		)
	}
});

module.exports = Performer;
