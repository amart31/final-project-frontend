import React, { Component } from "react";
import { Nav, NavLink } from "reactstrap";
import Logo from "../../img/logo1.jpg";
import PropTypes from "prop-types";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-auto py-2 text-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-4 d-flex justify-content-center">
							<img
								src={Logo}
								width="100"
								height="90"
								alt="logo"
							/>
						</div>
						<div className="col-2">
							<p>Main Menu</p>
							<Nav vertical>
								<NavLink href="/">Home</NavLink>
								<NavLink href="/rent">Rent</NavLink>
								<NavLink href="/contact">Contact</NavLink>
								<NavLink href="/about">About Us</NavLink>
							</Nav>
						</div>
						<div className="col-2">
							<p>Contact us</p>
							<Nav vertical>
								<NavLink href="/">Home</NavLink>
								<NavLink href="/rent">Rent</NavLink>
								<NavLink href="/contact">Contact</NavLink>
								<NavLink href="/about">About Us</NavLink>
							</Nav>
						</div>
						<div className="col-2">
							<p>About Us</p>
							<Nav vertical>
								<NavLink href="/">Home</NavLink>
								<NavLink href="/rent">Rent</NavLink>
								<NavLink href="/contact">Contact</NavLink>
								<NavLink href="/about">About Us</NavLink>
							</Nav>
						</div>
						<div className="col-2">
							<p>Social</p>
							<Nav vertical>
								<NavLink href="/#">
									<i className="fab fa-facebook-square" />
								</NavLink>
								<NavLink href="/#">
									<i className="fab fa-twitter-square" />
								</NavLink>
								<NavLink href="/#">
									<i className="fab fa-instagram" />
								</NavLink>
							</Nav>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
