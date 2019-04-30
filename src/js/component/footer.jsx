import React from "react";
import { NavItem, Nav, Button, NavLink } from "reactstrap";
import Logo from "../../img/logo1.jpg";
import { Link } from "react-router-dom";

const boxStyle = {
	border: "1px solid #4a82db"
};

export class Footer extends React.Component {
	render() {
		return (
			<footer
				className="footer mt-auto py-2"
				style={{
					background: "#f8f9fa",
					height: "80px",
					position: "relative"
				}}>
				<div
					className="d-inline-block"
					style={{ position: "absolute", top: "25%", left: "4%" }}>
					<Link to="/">
						<Button
							outline
							color="primary"
							className="mr-3"
							style={{ borderRadius: "0" }}>
							Home
						</Button>
					</Link>
					<Link to="/rent">
						<Button
							outline
							color="primary"
							className="mr-3"
							style={{ borderRadius: "0" }}>
							Rent
						</Button>
					</Link>
					<Link to="/account">
						<Button
							outline
							color="primary"
							className="mr-3"
							style={{ borderRadius: "0" }}>
							Account
						</Button>
					</Link>
					<Link to="/contact">
						<Button
							outline
							color="primary"
							className="mr-4"
							style={{ borderRadius: "0" }}>
							Contact
						</Button>
					</Link>
				</div>
				<div
					className="d-inline-block"
					style={{ position: "absolute", top: "10%", left: "85%" }}>
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
