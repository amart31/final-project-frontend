import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//styles import
import "../../../styles/featuredproducts.css";

const FeaturedProducts = props => {
	return (
		<div>
			<Link to={props.link}>
				<div className="img-card">
					<img
						src={props.source}
						alt="Product image"
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							backgroundSize: "cover"
						}}
					/>
				</div>
				<div className="centered-text">{props.title}</div>
			</Link>
		</div>
	);
};

export default FeaturedProducts;

FeaturedProducts.propTypes = {
	source: PropTypes.func,
	title: PropTypes.func,
	link: PropTypes.func
};
