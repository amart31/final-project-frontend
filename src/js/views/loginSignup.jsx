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

//import of the style sheet
import "../../styles/loginsignup.css";

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
				<div style={{ background: "#a9b6cc" }} className="row">
					<Nav
						tabs
						style={{
							border: "0",
							margin: "0 auto",
							width: "200px"
						}}>
						<NavItem style={{ width: "100px" }}>
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
						<NavItem style={{ width: "100px" }}>
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
				</div>
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
