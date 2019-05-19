import React from "react";

import ShortSignupForm from "../component/shortSignUp.jsx";

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
				<ShortSignupForm />
			</div>
		);
	}
}
