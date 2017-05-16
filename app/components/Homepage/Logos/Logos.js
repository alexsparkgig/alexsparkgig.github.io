var React = require('react');

var logoData = [{
		imageLink: "event1imagelink"
	}, {
		imageLink: "event2imagelink"
	}, {
		imageLink: "event3imagelink"
	}, {
		imageLink: "event4imagelink"
	}, {
		imageLink: "event5imagelink"
	}
];


var Logos = React.createClass({
	render: function() {
		// deep copy of style prop
		var style = JSON.parse(JSON.stringify(this.props.style));;
		style.wrapper.height = 150;
		style.wrapper.margin = '50px 10%';

		return (
			<div style={style.wrapper}>
				{/*<img src={} />
				<img src={} />
				<img src={} />
				<img src={} />
				<img src={} />*/}
				{
					logoData.map(function(data) {
						return <div style={style.logo_pic}>placeholder</div>
					})
				}
			</div>
		)	
	}
});

module.exports = Logos;
