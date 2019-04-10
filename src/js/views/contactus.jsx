import React from "react";
import { Button } from "reactstrap";
import ContactUsTop from "../component/functional/ContactUsTop";

import "../../styles/contact.css";

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
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
			<div>
				<ContactUsTop />
				<div className="contactus mb-5 pb-5 mt-2 ml-5 pl-3">
					<h2>Contact Us</h2>
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
							<label className="font-weight-bold">
								Your Email
							</label>
							<input
								type="text"
								id="email"
								name="email:"
								placeholder="Your email"
								value={this.state.email}
								onChange={e =>
									this.setState({ email: e.target.value })
								}
							/>
							<label className="font-weight-bold">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="Subject"
								value={this.state.subject}
								onChange={e =>
									this.setState({ subject: e.target.value })
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
							<Button
								color="success"
								onClick={this.handleFormSubmit}>
								success
							</Button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
