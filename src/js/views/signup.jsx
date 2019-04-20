import React from "react";
import "../../styles/loginsignup.css";
import SignupForm from "../component/signupForm.jsx";

export class Signup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<SignupForm />
			</div>
		);
	}
}
