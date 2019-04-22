import React from "react";
import FeaturedProducts from "./functional/FeaturedProducts";

//import context to feed props to featuredproducts cards.
import { Context } from "../store/appContext.jsx";

class SimilarList extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<div className="row">
						<Context.Consumer>
							{({ store, actions }) => {
								return store.products
									.slice(0, 3)
									.map((item, index) => {
										return (
											<div
												className="col-md pt-2 pb-2"
												key={item.ID}>
												<FeaturedProducts
													source={item.image}
													title={item.post_title}
													link={"/item/" + item.ID}
												/>
											</div>
										);
									});
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}

export default SimilarList;
