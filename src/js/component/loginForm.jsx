import React from "react";
import { Form, FormGroup, Label, Input, Button, NavLink } from "reactstrap";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			pass: ""
		};
		this.user = React.createRef();
		this.pass = React.createRef();
	}
	validateForm() {
		return this.state.user.length > 0 && this.state.pass.length > 0;
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div
				style={{
					background: "#a9b6cc",
					height: "-webkit-fill-available",
					padding: "90px"
				}}>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn === true) {
							return alert(
								"Welcome " + store.session.user_nicename
							);
						} else {
							return (
								<div
									className="container text-center border"
									style={{
										width: "400px",
										color: "#4a82db",
										background: "white"
									}}>
									<h2 className="mt-4 pt-3">Log In</h2>
									<Form onSubmit={actions.handleFormSubmit}>
										<FormGroup>
											<Label htmlFor="username">
												Username:
											</Label>
											<Input
												style={{
													width: "300px",
													margin: "0 auto"
												}}
												type="text"
												name="username"
												ref={this.user}
												placeholder="username"
												onChange={e =>
													this.setState({
														user: e.target.value
													})
												}
											/>
										</FormGroup>

										<FormGroup>
											<Label htmlFor="userPass">
												Password:
											</Label>
											<Input
												style={{
													width: "300px",
													margin: "0 auto"
												}}
												type="password"
												name="userPass"
												ref={this.pass}
												placeholder="password"
												onChange={e =>
													this.setState({
														pass: e.target.value
													})
												}
											/>
										</FormGroup>
										<div className="text-center pb-2">
											<Link to="/rent">
												<Button
													color="primary"
													disabled={
														!this.validateForm()
													}
													onClick={() => {
														this.setState({
															session: actions.login(
																this.state.user,
																this.state.pass
															)
														});
													}}>
													Log In
												</Button>
											</Link>
										</div>
									</Form>
									<div>
										<NavLink href="/signup">
											Not a Member? Signup
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
