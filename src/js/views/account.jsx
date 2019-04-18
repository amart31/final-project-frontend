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
								<div>
									<p>
										username:&nbsp;
										{store.session.user_nicename}
									</p>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
