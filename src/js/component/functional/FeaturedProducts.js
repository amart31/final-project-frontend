import React from "react";
import PropTypes from "prop-types";

//styles import
import "../../../styles/featuredproducts.css";

const FeaturedProducts = props => {
	return (
		<div>
			<div className="img-card">
				<img
					src={props.source}
					alt="Card image cap"
					style={{ maxWidth: "100%", maxHeight: "100%" }}
				/>
				<div className="centered-text">Card description</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;

FeaturedProducts.propTypes = {
	source: PropTypes.func
};
