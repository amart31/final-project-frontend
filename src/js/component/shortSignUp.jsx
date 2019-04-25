import React from "react";
import { Col, Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { Context } from "../store/appContext.jsx";

export default class ShortSignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			user: "",
			email: "",
			pass: ""
		};
		this.user = React.createRef();
		this.email = React.createRef();
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
					color: "#4a82db",
					height: "-webkit-fill-available"
				}}>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn === true) {
							return alert("Welcome " + store.session.user);
						} else {
							return (
								<div className="container">
									<Form>
										<Row form>
											<Col xs={12} md={4}>
												<FormGroup>
													<Label htmlFor="user">
														Username
													</Label>
													<Input
														type="text"
														name="user"
														id="user"
														value={this.state.user}
														ref={this.user}
														placeholder=""
														onChange={e =>
															this.setState({
																user:
																	e.target
																		.value
															})
														}
													/>
												</FormGroup>
											</Col>
											<Col xs={12} md={4}>
												<FormGroup>
													<Label htmlFor="email">
														Email
													</Label>
													<Input
														type="email"
														name="email"
														id="email"
														value={this.state.email}
														ref={this.email}
														placeholder="example@mail.com"
														onChange={e =>
															this.setState({
																email:
																	e.target
																		.value
															})
														}
													/>
												</FormGroup>
											</Col>
											<Col xs={12} md={4}>
												<FormGroup>
													<Label htmlFor="userPass">
														Password
													</Label>
													<Input
														type="password"
														name="userPass"
														id="userPass"
														ref={this.pass}
														value={this.state.pass}
														placeholder="password placeholder"
														onChange={e =>
															this.setState({
																pass:
																	e.target
																		.value
															})
														}
													/>
												</FormGroup>
											</Col>
										</Row>

										<div className="text-center pb-5 mb-5">
											<Button
												color="primary"
												onClick={() => {
													this.setState({
														users: actions.register(
															this.state.user,
															this.state.pass,
															this.state.email
														)
													});
												}}>
												Sign Up
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
