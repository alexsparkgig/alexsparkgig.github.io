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
	flexDirection: 'row',
	height: 250,
	textAlign: 'center',
	margin: '0% 20%',
}

const next_wrapper = {
	flexGrow: '5',
	display: 'flex',
	alignSelf: 'center',
	transform: 'translateY(-50%)',
}

let style_pic = {
	float: 'left',
	borderRadius: '25px',
	backgroundColor: colors.circle_color,
	width: "25%",
	height: '80%',
	display: 'inline-block',
	flexGrow: '2',
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
	// display: 'inline-block',
}
const text_wrapper = {
	// display: 'inline-block',
	height: 75,
	textAlign: 'left',
}

const heading = {
	color: 'black',
	fontSize: '30px'
}
const description = {
	color: colors.section,
	fontSize: '20px'	
}



var Step = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	render: function() {
		if (this.props.number % 2 === 1) {
			style_pic.marginRight = '5%';
		}

		return (
			<div style={wrapper}>
				{(this.props.number % 2 == 1) && <div className="img_placeholder" style={style_pic}>raaahdsfgsfg</div>}
				<div className="title_and_desc" style={next_wrapper}>
					<div className="number" style={circle}>{this.props.number}</div>
					<div style={text_wrapper}>
						<div style={heading}>{"Step " + this.props.number}</div>
						<div style={description}>{this.props.description}</div>
					</div>
				</div>
				{(this.props.number % 2 == 0) && <div className="img_placeholder" style={style_pic}>raaahdsfgsfg</div>}
			</div>
		)
	}
});

module.exports = Step;
