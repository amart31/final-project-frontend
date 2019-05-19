import React from "react";

import LoginForm from "../component/loginForm.jsx";

export class Login extends React.Component {
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
				<LoginForm />
			</div>
		);
	}
}
