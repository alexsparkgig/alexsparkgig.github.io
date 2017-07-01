var React = require('react');

var logoData = [{
		imageLink: "/app/assets/waterloo.png"
	}, {
		imageLink: "/app/assets/toronto-life-logo.png"
	}, {
		imageLink: "/app/assets/dragons-den-logo-large.png"
	}, {
		imageLink: "/app/assets/Betakit-logo-02.png"
	}, {
		imageLink: "/app/assets/BNN.png"
	}
];

const wrapper = {
	margin: '20px',
}

const pic_style = {
	width: '15%',
	margin: '0 2%',
	// height: '20%',
}

var Logos = React.createClass({
	render: function() {
		return (
			<div style={wrapper}>
				{logoData.map(function(data) {
					return <img src={data.imageLink} style={pic_style} />
				})}
			</div>
		)	
	}
});

// const styles = {

// };

module.exports = Logos;
