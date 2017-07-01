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
	width: '100%',
	margin: '2% 0%',
	// height: '20%',
}

var Logos = React.createClass({
	render: function() {
		return <div style={wrapper}><img src="/app/assets/logos.png" style={pic_style} /></div>
	}
});

// const styles = {

// };

module.exports = Logos;
