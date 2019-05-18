import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/rentByCategoryNav.css";

function RentByCategoryNav(props) {
	return (
		<React.Fragment>
			<div className="h-50 align-self-stretch sidebar">
				<h3 className="brand-head p-2">Rent By Category</h3>

				<Link to={"/categories/Tops"}>
					<div className="text-center">Tops</div>
				</Link>

				<Link to={"/categories/Pants"}>
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
