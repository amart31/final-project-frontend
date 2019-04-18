import React from "react";
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Jumbotron,
	Container
} from "reactstrap";
import classnames from "classnames";

import SignupForm from "../component/signupForm.jsx";
import LoginForm from "../component/loginForm.jsx";

export class Login extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1"
		};
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<div>
				<Container
					fluid
					style={{
						height: "200px",
						textAlign: "center",
						padding: "0",
						color: "#4a82db"
					}}>
					<h1 className="display-3">Welcome to ReactCloset</h1>
					<p className="lead">
						{" "}
						Please
						{this.state.activeTab == 1 ? " Log In" : " Sign Up"}
					</p>
				</Container>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "1"
							})}
							onClick={() => {
								this.toggle("1");
							}}>
							Log In
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "2"
							})}
							onClick={() => {
								this.toggle("2");
							}}>
							Sign Up
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<LoginForm />
					</TabPane>
					<TabPane tabId="2">
						<SignupForm />
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
