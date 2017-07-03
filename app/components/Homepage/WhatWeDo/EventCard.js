var React = require('react');
var PropTypes = require('prop-types');

const colors = {
	section: '#64717A', // (what we do, our locations) section title
	pale_blue: '#FBFCFF',
	body_text: '#7A7A7A',
	circle_color: '#EAEBEE',
	circle_text: '#797979',
	CTA_buttons: '#53A5E3',
	CTA_hover: '#77ABCF',
	white: 'white',
}

let gen_card = {
	wrapper: {
		border: '1px solid #DFE5E9',
		height: 500,
		width: '28%',
		borderRadius: 5,
		margin: '2%',
		display: 'flex',
		flexDirection: 'column',
	},
	pic: {
		backgroundColor: '#F1F2F5',
		width: 380,
	},
	text_wrapper: {
		marginLeft: 20,
		height: '50%',
		textAlign: 'left',
		display: 'flex',
		flexDirection: 'column',
	},
	heading: {
		color: 'black',
		fontSize: '22px',
		fontWeight: '500',
		margin: '14px 0',
	},
	description: {
		color: colors.section,
	},
	cta_text: {
		color: colors.CTA_buttons,
		fontWeight: '500',
		alignSelf: 'flex-end',
		margin: 'auto auto 20px 0px',
		cursor: 'pointer',
	},
}

const whatwedo_wrapper = {
	border: '1px solid #DFE5E9',
	height: 400,
	width: '33%',
	borderRadius: 5,
	margin: '2%',
	display: 'flex',
	flexDirection: 'column',
}

let pic_container = {
	overflow: 'hidden',
	height: 200,
	width: '100%',
}

var EventCard = React.createClass({
	propTypes: {
		imageLink: PropTypes.string.isRequired,
		event: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired
	},
	seeAvailabilityHander: function() {
		var element = document.getElementById("quote");
		element.scrollIntoView({block: "end", behavior: "smooth"});
	},
	render() {
		var card_styles = gen_card;

		if (this.props.origin == "SparkgigAdvantage") {
			gen_card.pic.width = 'initial'
			gen_card.pic.backgroundColor = 'initial'
			pic_container.backgroundColor = '#F1F2F5'
		}

		return (
			<div style={(this.props.origin == "WhatWeDo") ? whatwedo_wrapper : card_styles.wrapper}>
				<div style={pic_container}>
					<img style={card_styles.pic} src={this.props.imageLink} />	
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