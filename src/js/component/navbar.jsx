import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			user: {
				isLoggedIn: false,
				username: "",
				email: ""
			},
			session: {
				isLoggedIn: false,
				token: "",
				user_display_name: "",
				user_email: "",
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
								} else if (store.user.isLoggedIn) {
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
													{store.user.username}
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
													to="/login"
													className="mx-3"
													id="login">
													Login
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
