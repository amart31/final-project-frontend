import React from "react";
import {
	Container,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	FormText,
	FormFeedback
} from "reactstrap";
import { Context } from "../store/appContext.jsx";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			userPass: ""
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}
	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}
	render() {
		return (
			<Container>
				<h2>Log In</h2>
				<Form>
					<Col>
						<FormGroup>
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								name="email"
								id="email"
								value={this.state.email}
								placeholder="example@mail.com"
								onChange={e =>
									this.setState({ email: e.target.value })
								}
							/>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label htmlFor="userPass">Password</Label>
							<Input
								type="password"
								name="userPass"
								id="userPass"
								value={this.state.userPass}
								placeholder="password placeholder"
								onChange={e =>
									this.setState({
										userPass: e.target.value
									})
								}
							/>
						</FormGroup>
					</Col>
					<Button onClick={this.handleFormSubmit}>Submit</Button>
				</Form>
			</Container>
		);
	}
}
