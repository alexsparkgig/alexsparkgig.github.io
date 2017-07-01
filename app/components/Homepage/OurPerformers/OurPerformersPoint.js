var React = require('react');


const review_wrapper = {
	height: 200,
}

const text_wrapper = {
	float: 'left',
	textAlign: 'left',
	marginBottom: 20,
	width: '70%',
	marginLeft: '15%',
}

const heading = {
	color: 'black',
	fontSize: '25px',
	fontWeight: '500',
}


var OurPerformersPoint = React.createClass({
	render: function() {
		return (
			<div style={text_wrapper}>
				<div style={heading}>{this.props.number}. {this.props.header}</div>
				<div>{this.props.text}</div>
			</div>
		)	
	}
});

module.exports = OurPerformersPoint;
