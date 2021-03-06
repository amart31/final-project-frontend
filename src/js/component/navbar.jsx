import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			session: {
				isLoggedIn: false,
				user_nicename: ""
			}
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
				<Navbar
					className="d-flex align-items-center"
					color="light"
					light
					expand="md">
					<Link to="/">
						<span className="navbar-brand mb-0 h1">
							Fashion Rentals
						</span>
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.session.isLoggedIn) {
									return (
										<Nav className="ml-auto" navbar>
											<NavItem>
												<Link to="/" className="mx-3">
													Home
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/rent"
													className="mx-3">
													Rent
												</Link>
											</NavItem>

											<NavItem>
												<Link
													to="/account"
													className="mx-3">
													{
														store.session
															.user_nicename
													}
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/"
													onClick={e => {
														actions.handleSignOut();
													}}
													className="header-item">
													Log Out{" "}
													<i className="fas fa-sign-in-alt" />
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/cart"
													className="mx-3">
													<i className="fas fa-shopping-cart" />
													<span className="badge badge-pill badge-primary">
														{actions.cartTotalItems()}
													</span>
												</Link>
											</NavItem>
										</Nav>
									);
								} else {
									return (
										<Nav className="ml-auto" navbar>
											<NavItem>
												<Link to="/" className="mx-3">
													Home
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/rent"
													className="mx-3">
													Rent
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/account"
													className="mx-3">
													Account
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/login"
													className="header-item">
													Login{" "}
													<i className="fas fa-sign-in-alt" />
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/cart"
													className="mx-3">
													<i className="fas fa-shopping-cart" />
													<span className="badge badge-pill badge-primary">
														{actions.cartTotalItems()}
													</span>
												</Link>
											</NavItem>
										</Nav>
									);
								}
							}}
						</Context.Consumer>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

NavBar.propTypes = {
	history: PropTypes.object
};
