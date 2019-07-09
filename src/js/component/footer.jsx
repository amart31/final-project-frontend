import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer mt-auto py-2">
				<div className="d-inline-block footer__side">
					<Link to="/">
						<Button
							outline
							color="primary"
							className="mr-3 footer__btn">
							Home
						</Button>
					</Link>
					<Link to="/rent">
						<Button
							outline
							color="primary"
							className="mr-3 footer__btn">
							Rent
						</Button>
					</Link>
					<Link to="/account">
						<Button
							outline
							color="primary"
							className="mr-3 footer__btn">
							Account
						</Button>
					</Link>
					<Link to="/contact">
						<Button
							outline
							color="primary"
							className="mr-4 footer__btn">
							Contact
						</Button>
					</Link>
				</div>
				<div className="d-inline-block footer__logo">
					<a href="facebook.com">
						<i className="fab fa-facebook-square fa-3x mr-2" />
					</a>
					<a href="twitter.com">
						<i className="fab fa-twitter-square fa-3x mr-2" />
					</a>
					<a href="instagram.com">
						<i className="fab fa-instagram fa-3x" />
					</a>
				</div>
			</footer>
		);
	}
}
