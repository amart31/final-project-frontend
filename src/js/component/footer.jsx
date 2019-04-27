import React from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
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
				style={{ background: "#f8f9fa" }}>
				<img src={Logo} width="100" height="90" alt="logo" />

				<div className="float-right">
					<Link to="/">
						<Button outline color="primary" className="mr-3">
							Home
						</Button>
					</Link>
					<Link to="/rent">
						<Button outline color="primary" className="mr-3">
							Rent
						</Button>
					</Link>
					<Link to="/account">
						<Button outline color="primary" className="mr-3">
							Account
						</Button>
					</Link>
					<Link to="/contact">
						<Button outline color="primary" className="mr-3">
							Contact
						</Button>
					</Link>
					<Link to="/#">
						<i className="fab fa-facebook-square fa-4x mr-3" />
					</Link>
					<Link to="/#">
						<i className="fab fa-twitter-square fa-4x mr-3" />
					</Link>
					<Link to="/#">
						<i className="fab fa-instagram fa-4x mr-3" />
					</Link>
				</div>
			</footer>
		);
	}
}
