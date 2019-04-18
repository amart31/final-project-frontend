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
							<div className="container text-center">
								<h2>Log In</h2>
								<Form onSubmit={actions.handleFormSubmit}>
									<FormGroup>
										<Label htmlFor="username">
											Username:
										</Label>
										<Input
											style={{ width: "300px" }}
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

									<FormGroup>
										<Label htmlFor="userPass">
											Password:
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
									<div className="text-center pb-5 mb-5">
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
											Submit
										</Button>
									</div>
								</Form>
						
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
