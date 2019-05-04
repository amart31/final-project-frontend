import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//styles import
import "../../../styles/featuredproducts.css";

const FeaturedProducts = props => {
	return (
		<div>
			<Link to={props.link}>
				<div
					className="img-card featured-img"
					style={{ backgroundImage: `url(${props.source})` }}
				/>
				<div className="centered-text">{props.title}</div>
			</Link>
		</div>
	);
};

export default FeaturedProducts;

FeaturedProducts.propTypes = {
	source: PropTypes.string,
	title: PropTypes.string,
	link: PropTypes.string
};
