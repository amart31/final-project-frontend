import React from "react";
import { Form, FormGroup, Label, Input, Button, NavLink } from "reactstrap";
import { Context } from "../store/appContext.jsx";

export default class ShortSignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: "",
			email: "",
			pass: "",
			confirmPass: ""
		};
		this.user = React.createRef();
		this.email = React.createRef();
		this.pass = React.createRef();
		this.confirmPass = React.createRef();
	}
	validateForm() {
		return (
			this.state.user.length > 0 &&
			this.state.pass.length > 0 &&
			this.state.pass == this.state.confirmPass
		);
	}
	handleSubmit() {
		alert("Welcome: " + this.user);
	}

	// check() {
	// 	if (this.pass == this.confirmPass) {
	// 		document.getElementById("message").innerHTML = "matching";
	// 		document.getElementById("message").style.color = "green";
	// 	} else if (this.pass !== this.confirmPass) {
	// 		document.getElementById("message").innerHTML = "not matching";
	// 		document.getElementById("message").style.color = "red";
	// 	}
	// }
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		return (
			<div className="signup">
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn === true) {
							return alert("Welcome " + store.session.user);
						} else {
							return (
								<div className="container text-center border signup__container">
									<h2 className="mt-4 pt-3">Sign Up</h2>
									<Form>
										<FormGroup>
											<Label htmlFor="user">
												Username:
											</Label>
											<Input
												className="signup__input"
												type="text"
												name="user"
												id="user"
												ref={this.user}
												placeholder="your user name"
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
											/>
										</FormGroup>

										<FormGroup>
											<Label htmlFor="email">
												Email:
											</Label>
											<Input
												className="signup__input"
												type="email"
												name="email"
												id="email"
												ref={this.email}
												placeholder="example@mail.com"
												onChange={e =>
													this.setState({
														email: e.target.value
													})
												}
											/>
										</FormGroup>

										<FormGroup>
											<Label htmlFor="pass">
												Password:
											</Label>
											<Input
												className="signup__input"
												type="password"
												name="pass"
												id="pass"
												ref={this.pass}
												// onkeyup={this.check()}
												placeholder="password"
												onChange={e =>
													this.setState({
														pass: e.target.value
													})
												}
											/>
										</FormGroup>

										<FormGroup>
											<Label htmlFor="confirmPass">
												Confirm Password:
											</Label>
											<Input
												className="signup__input"
												type="password"
												name="confirmPass"
												id="confirmPass"
												ref={this.confirmPass}
												// onkeyup={this.check()}
												placeholder="confirm password"
												onChange={e =>
													this.setState({
														confirmPass:
															e.target.value
													})
												}
											/>
										</FormGroup>

										<div className="text-center pb-2">
											<Button
												color="primary"
												disabled={!this.validateForm()}
												onClick={() => {
													actions.register(
														this.state.user,
														this.state.pass,
														this.state.email,
														this.state.confirmPass
													);
												}}>
												Sign Up
											</Button>
										</div>
									</Form>
									<div>
										<NavLink href="/login">
											Already a Member? Log in
										</NavLink>
									</div>
								</div>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
