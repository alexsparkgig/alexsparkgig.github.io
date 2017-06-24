var React = require('react');
var ReactDOM = require('react-dom');

let Performer = require('./Performer.js');

const performerData = [{
		name: "Face Painter",
		first_hr: "$100",
		next_hr: "$80",
		hr_min: "2h",
		first_p: "Our face paints are water-based and FDA approved, this ensures that they're safe for the kids and easy to wash off!",
		sec_p: "Our performers are also super energetic, friendly and fun! They are great with kids and lots of patience to handle the naughty ones.",
		third_p: "They are talented artists who can paint over 20,000 designs, super heroes? animals? butterfly? you name it we paint it!",
		link: "",
		image_link: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	}, {
		name: "Balloon Twister",
		first_hr: "$100",
		next_hr: "$80",
		hr_min: "2h",
		first_p: "Our Balloon Twisters, are one of a kind, they are funny, goofy and will keep the kids laughing the entire time!",
		sec_p: "We use premium latex free balloons to avoid allergies to the materials and so they don't pop!",
		third_p: "Our Balloon Artists are also talented in the arts of the balloon! Kids can choose from over 2000 designs from swords, to animals, to hats!",
		link: "",
		image_link: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	}, {
		name: "Caricature Artist",
		first_hr: "$100",
		next_hr: "$80",
		hr_min: "2h",
		first_p: "Our face paints are water-based and FDA approved, this ensures that they're safe for the kids and easy to wash off!",
		sec_p: "Our performers are also super energetic, friendly and fun! They are great with kids and lots of patience to handle the naughty ones.",
		third_p: "They are talented artists who can paint over 20,000 designs, super heroes? animals? butterfly? you name it we paint it!",
		link: "",
		image_link: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	}, {
		name: "Magician",
		first_hr: "$125",
		next_hr: "$100",
		hr_min: "3h",
		first_p: "Our face paints are water-based and FDA approved, this ensures that they're safe for the kids and easy to wash off!",
		sec_p: "Our performers are also super energetic, friendly and fun! They are great with kids and lots of patience to handle the naughty ones.",
		third_p: "They are talented artists who can paint over 20,000 designs, super heroes? animals? butterfly? you name it we paint it!",
		link: "",
		image_link: "http://udellfamilyinsurance.com/wp-content/uploads/2017/01/Fotolia_101375810_Subscription_XXL-800x390.jpg"
	},
];

var QuotePage = React.createClass({
	render: function() {
		return (
			<div>
				{
					performerData.map(function(data, i) {
						return (
							<Performer data={data} />
						)
					})	
				}
			</div>
		)
	}
});

module.exports = QuotePage;
