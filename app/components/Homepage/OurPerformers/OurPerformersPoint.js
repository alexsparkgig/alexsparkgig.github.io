var React = require('react');


const review_wrapper = {
	height: 200,
}

const text_wrapper = {
	float: 'left',
	textAlign: 'left',
	marginBottom: 30,
	width: '70%',
	marginLeft: '15%',
}

const heading = {
	color: 'rgb(80, 80, 80)',
	fontSize: '21px',
	marginBottom: 6,
	fontWeight: '500',
}

const desc = {
	fontSize: '16px',
	color: 'rgb(100, 113, 122)',
}


var OurPerformersPoint = React.createClass({
	render: function() {
		return (
			<div style={text_wrapper}>
				<div style={heading}>{this.props.number}. {this.props.header}</div>
				<div style={desc}>{this.props.text}</div>
			</div>
		)	
	}
});

module.exports = OurPerformersPoint;
