import React from "react";

import "../../styles/accountSideMenu.css";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

const AccountSideMenu = props => {
	return (
		<nav id="sidebar">
			<ul className="list-unstyled components">
				<p>{props.user_nicename + " Settings"}</p>
				<li className="active">
					<a href="#">Summary</a>
				</li>
				<li>
					<a href="#">Orders</a>
				</li>
				<li>
					<a
						href="#pageSubmenu"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdown-toggle">
						Products
					</a>
					<ul className="collapse list-unstyled" id="pageSubmenu">
						<li>
							<a href="#">Add Product</a>
						</li>
						<li>
							<a href="#">Product List</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">Wish List</a>
				</li>
			</ul>
		</nav>
	);
};

export default AccountSideMenu;

AccountSideMenu.propTypes = {
	user_nicename: PropTypes.string
};

AccountSideMenu.defaultProps = {
	user_nicename: "Placeholder"
};
