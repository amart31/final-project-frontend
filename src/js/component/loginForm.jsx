import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Context } from "../store/appContext.jsx";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: "",
			pass: ""
		};
		this.user = React.createRef();
		this.pass = React.createRef();
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<h2>Log In</h2>
								<Form>
									<Col>
										<FormGroup>
											<Label htmlFor="email">Email</Label>
											<Input
												type="email"
												name="email"
												ref={this.user}
												placeholder="example@mail.com"
												onChange={e =>
													this.setState({
														email:
															event.target.value
													})
												}
											/>
										</FormGroup>
									</Col>
									<Col>
										<FormGroup>
											<Label htmlFor="userPass">
												Password
											</Label>
											<Input
												type="password"
												name="userPass"
												ref={this.pass}
												placeholder="password placeholder"
												onChange={e =>
													this.setState({
														userPass:
															event.target.value
													})
												}
											/>
										</FormGroup>
									</Col>
									<Button onClick={this.handleFormSubmit}>
										Submit
									</Button>
								</Form>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
