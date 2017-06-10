var React = require('react');

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
		this.setState({ [name]: value })
	},
	render: function() {
		let style = this.props.style;
		return (
			<form action="https://formspree.io/hello@sparkgig.com" method="POST">
				<label style={style.header}>Get a Quote</label>
				<label>
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
					<input type="text" name="_replyto"
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
			</form>
		)	
	}
});

module.exports = Quote;
