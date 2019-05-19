import React from "react";
import { Context } from "../store/appContext.jsx";

import UserJumbo from "../component/userJumbo.js";
import AccountTabs from "../component/accountTabs.js";

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
			<div className="container-fluid mt-2">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container-fluid">
								<UserJumbo
									user_nicename={store.session.user_nicename}
									user_email={store.session.user_email}
								/>
								<div className="container-fluid">
									<AccountTabs
										user_nicename={
											store.session.user_nicename
										}
									/>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
