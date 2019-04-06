import React from "react";

import SignupForm from "../component/signupForm.jsx";
import "../../styles/home.css";

export class Login extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<SignupForm />
			</div>
		);
	}
}
