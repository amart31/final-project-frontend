import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class RentByCategoryNav extends React.Component {
	render() {
		return (
			<div>
				<Nav>
					<NavItem>
						<NavLink href="/categories">Tops</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/categories">Bottoms</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="categories">Accessories</NavLink>
					</NavItem>
				</Nav>
				<hr />
			</div>
		);
	}
}
