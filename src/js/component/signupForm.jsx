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

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			validate: {
				emailState: ""
			}
		};
	}
	render() {
		const { email, password } = this.state;
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Container>
							<h2>Sign Up</h2>
							<Form
								className="form"
								onSubmit={e => actions.submitForm(e)}>
								<Col>
									<FormGroup>
										<Label for="name">First Name</Label>
										<Input
											type="name"
											name="firstname"
											id="firstname"
											placeholder="First Name"
										/>
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label>Email</Label>
										<Input
											type="email"
											name="email"
											id="userEmail"
											placeholder="myemail@email.com"
											value={email}
											valid={
												this.state.validate
													.emailState ===
												"has-success"
											}
											invalid={
												this.state.validate
													.emailState === "has-danger"
											}
											onChange={e => {
												this.actions.validateEmail(e);
												this.actions.handleSignupChange(
													e
												);
											}}
										/>
										<FormFeedback valid>
											Good email.
										</FormFeedback>
										<FormFeedback>
											Please input a correct email.
										</FormFeedback>
										<FormText>
											Your username is most likely your
											email.
										</FormText>
									</FormGroup>
								</Col>
								<Col>
									<FormGroup>
										<Label for="userPassword">
											Password
										</Label>
										<Input
											type="password"
											name="password"
											id="userePassword"
											placeholder="********"
											value={password}
											onChange={e =>
												this.handleSignupChange(e)
											}
										/>
									</FormGroup>
								</Col>
								<Button>Submit</Button>
							</Form>
						</Container>
					);
				}}
			</Context.Consumer>
		);
	}
}
