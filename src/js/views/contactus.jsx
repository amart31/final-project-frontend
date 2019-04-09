import React from "react";
import { Button } from "reactstrap";

import "../../styles/contact.css";

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			issue: "",
			email: "",
			message: ""
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<div className="contactus mb-5 pb-5 mt-5 pt-5">
				<p className="text-center font-weight-bold">Contact Us</p>
				<div>
					<form>
						<label className="font-weight-bold">Name</label>
						<input
							type="text"
							id="name"
							name="firstname"
							placeholder="Your name.."
							value={this.state.name}
							onChange={e =>
								this.setState({ name: e.target.value })
							}
						/>
						<label className="font-weight-bold">Your Issue</label>
						<input
							type="text"
							id="issue"
							name="issue:"
							placeholder="Please tell us your issue.."
							value={this.state.issue}
							onChange={e =>
								this.setState({ issue: e.target.value })
							}
						/>
						<label className="font-weight-bold">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your email"
							value={this.state.email}
							onChange={e =>
								this.setState({ email: e.target.value })
							}
						/>
						<label className="font-weight-bold">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Write something.."
							value={this.state.message}
							onChange={e =>
								this.setState({ message: e.target.value })
							}
						/>
						<Button color="success" onClick={this.handleFormSubmit}>
							success
						</Button>
					</form>
				</div>
			</div>
		);
	}
}
