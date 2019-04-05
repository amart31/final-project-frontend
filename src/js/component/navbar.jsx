import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
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
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="mx-3">
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem href="/contact">
										Contact Us
									</DropdownItem>
									<DropdownItem href="/about">
										About Us
									</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
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
