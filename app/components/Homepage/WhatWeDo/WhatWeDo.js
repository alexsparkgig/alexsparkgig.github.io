var React = require('react');
var EventCard = require('./EventCard.js');

var eventData = [{
		name: "Magicians",
		description: "Spice up your party with a little bit of magic. From a magic show, to walk around magic, wow your guests with one of our amazing magicians. ",
		link: "event1link",
		imageLink: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	}, {
		name: "Face Painters",
		description: "Become a superhero, ROAR like a lion, twinkle like a fairy princess, or even get your game face on! Let us add a little color to your next party with a face painter!",
		link: "event2link",
		imageLink: "http://www.zoomentertainment.com.au/images/entertainers/facepainter-sarah-melbourne.jpg"
	}, {
		name: "Balloon Twisters",
		description: "Give your party some pop with some Balloon Art! From animals to crowns, you name it, we make it! ",
		link: "event3link",
		imageLink: "https://www.edmontonbouncycastle.ca/wp-content/uploads/2016/03/balloonartist.png"
	}, {
		name: "Caricature Artists",
		description: "If you are looking for a unique, hand made, and personalized gift for your guests, this is it! Create memories to last with one of our caricature artists.",
		link: "event4link",
		imageLink: "http://www.weddingsonline.in/blog/wp-content/uploads/2014/01/87.jpg"
	}
];

const card_wrapper = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}

let gen_wrapper = {
	width: '80%',
	textAlign: 'center',
	margin: '0% 10%',
}

var WhatWeDo = React.createClass({
	render() {
		let style = this.props.style;
		return (
			<div style={gen_wrapper} id={"whatwedo"}>
				<div style={style.header}>What We Do</div>
				{/* <iframe style={style.video} src={'https://www.youtube.com/embed/vFUaVhvfdLA'} /> */}
				<div>
					Book amazing performers instantly for a fraction of the cost. In a few clicks, receive a quote, availability and just book! It’s that easy. With over 200 performers and our top tier customer service team,we have your back every step of the way to the day of the event.
				</div>
				<div style={card_wrapper}>
					<EventCard key={eventData[0].name}
							   imageLink={eventData[0].imageLink}
							   event={eventData[0].name} 
				   			   description={eventData[0].description}
				               link={eventData[0].link}
				               origin={"WhatWeDo"} />
				    <EventCard key={eventData[1].name}
							   imageLink={eventData[1].imageLink}
							   event={eventData[1].name} 
				   			   description={eventData[1].description}
				               link={eventData[1].link}
				               origin={"WhatWeDo"} />
				</div>
				<div style={card_wrapper}>
					<EventCard key={eventData[2].name}
							   imageLink={eventData[2].imageLink}
							   event={eventData[2].name} 
				   			   description={eventData[2].description}
				               link={eventData[2].link}
				               origin={"WhatWeDo"} />
				    <EventCard key={eventData[3].name}
							   imageLink={eventData[3].imageLink}
							   event={eventData[3].name} 
				   			   description={eventData[3].description}
				               link={eventData[3].link}
				               origin={"WhatWeDo"} />
				</div>
			</div>
		);
	}
});

module.exports = WhatWeDo
