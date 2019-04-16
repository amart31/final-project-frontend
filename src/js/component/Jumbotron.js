import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

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
	bottom: "60px",
	left: "50px"
};

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid" style={jumbostyle}>
			<div className="container">
				<h2 className="text-uppercase align-middle" style={h2Style}>
					Shop latest drop
					{"  "}
					<Link to="/rent">
						<FontAwesomeIcon icon={faArrowCircleRight} />
					</Link>
				</h2>
			</div>
		</div>
	);
};

export default Jumbotron;
