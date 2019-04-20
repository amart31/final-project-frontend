import React from "react";
import { Context } from "../store/appContext.jsx";

import "../../styles/account.css";
import UserJumbo from "../component/userJumbo.js";
import AccountSideMenu from "../component/accountSideMenu.js";

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
							<div className="container">
								<UserJumbo
									user_nicename={store.session.user_nicename}
									user_email={store.session.user_email}
								/>
								<div className="wrapper">
									<AccountSideMenu
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
