import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid home__jumbo">
			<div className="container">
				<Link to="/rent">
					<h2 className="text-uppercase align-middle home__jumbo-head">
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
