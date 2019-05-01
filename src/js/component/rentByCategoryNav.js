import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/rentByCategoryNav.css";

function RentByCategoryNav(props) {
	return (
		<React.Fragment>
			<div className=" align-self-stretch sidebar">
				<h3 className="brand-head p-2">Rent by Category</h3>

				<Link to={"/categories/Top"}>
					<div className="text-center">Tops</div>
				</Link>

				<Link to={"/categories/Bottom"}>
					<div className="text-center">Bottoms</div>
				</Link>

				<Link to={"/categories/Shoes"}>
					<div className="text-center">Shoes</div>
				</Link>

				<Link to={"/categories/Accessories"}>
					<div className="text-center">Accessories</div>
				</Link>
			</div>
		</React.Fragment>
	);
}

export default RentByCategoryNav;

RentByCategoryNav.propTypes = {
	match: PropTypes.object
};
