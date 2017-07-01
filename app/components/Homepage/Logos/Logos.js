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
	width: '80%',
	margin: '2% 0%',
}

var Logos = React.createClass({
	render: function() {
		return <div style={wrapper}><img src="/app/assets/logos.png" style={pic_style} /></div>
	}
});

module.exports = Logos;
