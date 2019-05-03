import React from "react";
import { Link } from "react-router-dom";

let imgUrl =
	"https://images.pexels.com/photos/1345082/pexels-photo-1345082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const jumbostyle = {
	backgroundImage: "url(" + imgUrl + ")",
	backgroundSize: "cover",
	color: "#4a82db",
	height: "500px",
	position: "relative"
};
const h2Style = {
	position: "absolute",
	bottom: "15px",
	left: "50px"
};

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid" style={jumbostyle}>
			<div className="container">
				<Link to="/rent">
					<h2 className="text-uppercase align-middle" style={h2Style}>
						Shop latest drop
						{"  "}
						<i className="fas fa-arrow-right" />
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Jumbotron;
