import React from "react";

//styles import
import "../../../styles/featuredproducts.css";

const FeaturedProducts = props => {
	return (
		<div>
			<div className="img-card">
				<img
					src="http://via.placeholder.com/640x360"
					alt="Card image cap"
					style={{ width: "100%" }}
				/>
				<div className="centered-text">Card description</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
