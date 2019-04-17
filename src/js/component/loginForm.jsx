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
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<h2>Log In</h2>
								<Form onSubmit={actions.handleFormSubmit}>
									<Col>
										<FormGroup>
											<Label htmlFor="username">
												Username
											</Label>
											<Input
												type="text"
												name="username"
												ref={this.user}
												placeholder=""
												onChange={e =>
													this.setState({
														user: e.target.value
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
														pass: e.target.value
													})
												}
											/>
										</FormGroup>
									</Col>
									<Button
										onClick={() => {
											this.setState({
												session: actions.login(
													this.state.user,
													this.state.pass
												)
											});
										}}>
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
