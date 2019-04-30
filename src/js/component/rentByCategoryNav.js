import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RentByCategoryNav(props) {
	return (
		<React.Fragment>
			<hr className="p-3" />

			<div className="container">
				<h3 className="brand-head p-2">Rent by Category</h3>
				<div className="row d-flex justify-content-between my-1">
					<Link
						to={"/categories/Top"}
						className="col border border-secondary rounded justify-content-center mx-1">
						<div className="text-center">Tops</div>
					</Link>
					<Link
						to={"/categories/Bottom"}
						className="col border border-secondary rounded justify-content-center mx-1">
						<div className="text-center">Bottoms</div>
					</Link>
					<Link
						to={"/categories/Shoes"}
						className="col border border-secondary rounded justify-content-center mx-1">
						<div className="text-center">Shoes</div>
					</Link>
					<Link
						to={"/categories/Accessories"}
						className="col border border-secondary rounded justify-content-center mx-1">
						<div className="text-center">Accessories</div>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
}

export default RentByCategoryNav;

RentByCategoryNav.propTypes = {
	match: PropTypes.object
};
