var React = require('react');
var PropTypes = require('prop-types');

var colors = {
	section: '#64717A', // (what we do, our locations) section title
	pale_blue: '#FBFCFF',
	body_text: '#7A7A7A',
	circle_color: '#EAEBEE',
	circle_text: '#797979',
	CTA_buttons: '#53A5E3',
	CTA_hover: '#77ABCF',
	white: 'white',
}


const wrapper = {
	display: 'flex',
	height: 250,
	textAlign: 'center',
	margin: '0% 20%',
}

const next_wrapper = {
	display: '-webkit-inline-box',
	alignSelf: 'center',
	transform: 'translateY(-50%)',
}

let style_pic = {
	width: "40%",
	height: '80%',
	flexGrow: '1',
}

const steps_wrapper = {
	float: 'left',
	height: '80%',
	width: '40%',
	display: 'inline-block',
}
const circle = {
	backgroundColor: colors.circle_color,
	color: colors.circle_text,
	borderRadius: '100%',
	width: 50,
	height: 50,
	marginRight: 20,
	textAlign: 'center',
	lineHeight: '50px',
	fontSize: '150%',
}
const text_wrapper = {
	height: 75,
	textAlign: 'left',
}

const heading = {
	color: 'black',
	fontWeight: '500',
	fontSize: '25px'
}
const description = {
	color: colors.section,
	fontSize: '17px'
}



var Step = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	},
	render: function() {
		if (this.props.number === 1) {
			style_pic.marginRight = '5%';
			style_pic.width = '40%';
		} else if (this.props.number === 2) {
			style_pic.marginRight = '0%';
			style_pic.marginLeft = '10%';
			style_pic.width = '45%';
		} else if (this.props.number === 3) {
			style_pic.marginRight = '5%';
			style_pic.marginLeft = '0%';
			style_pic.width = '40%';
		} else if (this.props.number === 4) {
			style_pic.marginLeft = '10%';
			style_pic.width = '20%';
		}

		return (
			<div style={wrapper}>
				{(this.props.number % 2 == 1) && <img src={this.props.imageLink} style={style_pic} />}
				<div className="title_and_desc" style={next_wrapper}>
					<div className="number" style={circle}>{this.props.number}</div>
					<div style={text_wrapper}>
						<div style={heading}>{this.props.title}</div>
						<div style={description}>{this.props.description}</div>
					</div>
				</div>
				{(this.props.number % 2 == 0) && <img src={this.props.imageLink} style={style_pic} />}
			</div>
		)
	}
});

module.exports = Step;
