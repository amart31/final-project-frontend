import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Context } from "../store/appContext.jsx";

import { Home } from "../views/home.jsx";
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
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div
				style={{
					background: "#a9b6cc",
					height: "-webkit-fill-available"
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
									<h2 className="mt-5 pt-3">Log In</h2>
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
											<Button
												color="primary"
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
										</div>
									</Form>
								</div>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
