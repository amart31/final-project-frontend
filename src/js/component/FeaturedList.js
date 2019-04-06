import React from "react";
import FeaturedProducts from "./functional/FeaturedProducts";

const FeaturedList = props => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
			</div>
			<div className="row">
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
				<div className="col-md pt-2 pb-2">
					<FeaturedProducts />
				</div>
			</div>
		</div>
	);
};

export default FeaturedList;
