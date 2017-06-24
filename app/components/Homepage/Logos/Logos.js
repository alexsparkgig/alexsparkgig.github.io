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

const pic_style = {

}

var Logos = React.createClass({
	render: function() {
		// deep copy of style prop
		var style = JSON.parse(JSON.stringify(this.props.style));
		style.wrapper.height = 150;
		style.wrapper.margin = '0% 10%';

		return (
			<div style={style.wrapper}>
				{logoData.map(function(data) {
					// return <img src={data.imageLink} style={pic_style} />
					return <div style={style.logo_pic}>placeholder</div>
				})}
			</div>
		)	
	}
});

// const styles = {

// };

module.exports = Logos;
