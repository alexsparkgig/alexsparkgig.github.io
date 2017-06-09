var React = require('react');
var mandrill = require('node-mandrill')('64a5807f338a0c414d06a0bbcdbf5822-us3');

var Quote = React.createClass({
	getInitialState: function() {
		return {
			name: "",
			date: "",
			duration: "",
			num_guests: "",
			postal_code: "",
			email: "",
			anything_else: "",
		}
	},
	handleChange: function(event) {
		const targ = event.target;
		const value = targ.value;
		const name = targ.name;
		console.log(value);
		console.log(name);
		this.setState({ [name]: value })
	},
	sendMail: function() {
		//send an e-mail to sparkgig
		mandrill('/messages/send', {
		    message: {
		        to: [{email: 'hello@sparkgig.com', name: 'N/A'}],
		        from_email: 'calvinchan@gmail.com', // get this from form
		        subject: "Sparkgig Email form",
		        text: "???"
		    }
		}, function(error, response) {
		    //uh oh, there was an error
		    if (error) console.log( JSON.stringify(error) );
		    //everything's good, lets see what mandrill said
		    else console.log(response);
		});
	},

	render: function() {
		return (
			// take them to the quote/performer page?
			<form action={this.sendMail}>
				<label>
					Get a Quote<br/>
					See pricing here instantly<br/>
				</label>
				<label>
					Name:
					<input type="text" name="name"
						    value={this.state.value} 
						    onChange={this.handleChange} /><br/>
				</label>
				<label>
					Date of Event:
					<input type="text" name="date"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<label>
					Duration:
					<input type="text" name="duration"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<label>
					# of Guests:
					<input type="text" name="num_guests"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<label>
					Postal Code of Venue
					<input type="text" name="postal_code"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<label>
					Email:
					<input type="text" name="email"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<label>
					Anything else we should know?
					<input type="text" name="anything_else"
							value={this.state.value} 
						   	onChange={this.handleChange} /><br/>
				</label>
				<input type="submit" value="Submit" />
				{/*<input type="" name="Name">
				<input type="" name="">
				<input type="" name="">*/}
			</form>
		)	
	}
});

module.exports = Quote;
