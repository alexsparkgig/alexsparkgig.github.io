var React = require('react');

const gen_input_style = {
	borderRadius: '5px',
	height: '30px',
	fontSize: '100%',
	padding: '10px',
	border: 'none',
	backgroundColor: '#EAEBEE',
	margin: '7px 0px',
	width: '100%',
}

let submit_style = {
	borderRadius: 5,
	width: 170,
	height: 40,
	backgroundColor: '#53A5E3',
	color: 'white',
	lineHeight: '50%',
	fontSize: '20px',
	border: 'none',
	margin: '20px 0',
}

const inline = {
	display: 'inline-block',
	width: '48%',
}

let left_input_style = Object.assign({}, inline);
let right_input_style = Object.assign({}, inline);
left_input_style.float = 'left';
right_input_style.float = 'right';

const wrapper = {
	width: '60%',
	margin: '0% 20%',
}

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
		let style = this.props.style
		return (
			<form action="https://formspree.io/hello@sparkgig.com"
				  method="POST"
				  id="quote">
				<div style={style.header}>Get a Quote<br/></div>
				{/*<div style={tagline}>
					See pricing here instantly<br/>
				</div>*/}
				<div style={wrapper}>
					<input type="text" name="name"
							placeholder='Name'
						    value={this.state.value}
						    style={gen_input_style}
						    onChange={this.handleChange} /><br/>
				</div>
				<div style={wrapper}>
					<div style={left_input_style}>
						<input type="text" name="date"
								placeholder='Date of Event'
								value={this.state.value} 
								style={gen_input_style}
							   	onChange={this.handleChange} /><br/>
					</div>
					<div style={right_input_style}>
						<input type="text" name="duration"
								placeholder='Duration'
								value={this.state.value} 
								style={gen_input_style}
							   	onChange={this.handleChange} /><br/>
					</div>
				</div>
				<div style={wrapper}>
					<div style={left_input_style}>
						<input type="text" name="num_guests"
								placeholder='Number of Guests'
								value={this.state.value} 
								style={gen_input_style}
							   	onChange={this.handleChange} /><br/>
					</div>
					<div style={right_input_style}>
						<input type="text" name="postal_code"
								placeholder='Postal Code of Venue'
								value={this.state.value} 
								style={gen_input_style}
							   	onChange={this.handleChange} /><br/>
					</div>
				</div>
				<div style={wrapper}>
					<input type="text" name="_replyto"
							placeholder='Email'
							value={this.state.value}
							style={gen_input_style}
						   	onChange={this.handleChange} /><br/>
				</div>
				<div style={wrapper}>
					<input type="text" name="anything_else"
							placeholder='Anything else we should know?'
							value={this.state.value}
							style={gen_input_style}
						   	onChange={this.handleChange} /><br/>
				</div>
				<input type="submit"
						value="Submit"
						style={submit_style} />
			</form>
		)	
	}
});

module.exports = Quote;
