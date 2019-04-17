import React from "react";
import { Context } from "../store/appContext.jsx";

export class Account extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			session: {
				isLoggedIn: false,
				user: "",
				pass: ""
			}
		};
	}
	render() {
		return (
			<div className="text-center mt-5">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<h1>Account Settings</h1>
								<p>{store.session.user_nicename}</p>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
