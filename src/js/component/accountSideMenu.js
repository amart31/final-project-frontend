import React from "react";

import "../../styles/accountSideMenu.css";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

const AccountSideMenu = props => {
	return (
		<nav id="sidebar">
			<div className="sidebar-header">
				<h3>{props.user_nicename}</h3>
			</div>
			<ul className="list-unstyled components">
				<p>Account</p>
				<li className="active">
					<a href="#">Summary</a>
				</li>
				<li>
					<a href="#">Orders</a>
				</li>
				<li>
					<a
						href="#productSubmenu"
						data-toggle="collapse"
						aria-expanded="false"
						className="dropdwpn-toggle">
						Products
					</a>
					<ul className="collapse list-unstyled" id="productSubmenu">
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
