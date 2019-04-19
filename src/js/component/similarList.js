import React from "react";
import FeaturedProducts from "./functional/FeaturedProducts";

//import context to feed props to featuredproducts cards.
import { Context } from "../store/appContext.jsx";

class SimilarList extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<div className="row">
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[9]
													? store.products[9].image
													: ""
											}
											title={
												store.products[9]
													? store.products[9]
															.post_title
													: ""
											}
											link={"/item/" + 9}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[1]
													? store.products[1].image
													: ""
											}
											title={
												store.products[1]
													? store.products[1]
															.post_title
													: ""
											}
											link={"/item/" + 1}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[2]
													? store.products[2].image
													: ""
											}
											title={
												store.products[2]
													? store.products[2]
															.post_title
													: ""
											}
											link={"/item/" + 2}
										/>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

export default SimilarList;
