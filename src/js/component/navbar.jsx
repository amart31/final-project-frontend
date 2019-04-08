import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from "reactstrap";
import PropTypes from "prop-types";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Fashion Rentals</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<Link to="/" className="mx-3">
									Home
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/login" className="mx-3">
									Login
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/products" className="mx-3">
									Products
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/rent" className="mx-3">
									Rent
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/login" className="mx-3">
									Account
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/cart" className="mx-3">
									<i className="fas fa-shopping-cart" />
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

Navbar.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

NavbarBrand.propTypes = {
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

NavbarToggler.propTypes = {
	type: PropTypes.string,
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};
