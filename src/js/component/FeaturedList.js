import React from "react";
import FeaturedProducts from "./functional/FeaturedProducts";

//import context to feed props to featuredproducts cards.
import { Context } from "../store/appContext.jsx";

class FeaturedList extends React.Component {
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
								<div className="row">
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[3]
													? store.products[3].image
													: ""
											}
											title={
												store.products[3]
													? store.products[3]
															.post_title
													: ""
											}
											link={"/item/" + 3}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[4]
													? store.products[4].image
													: ""
											}
											title={
												store.products[4]
													? store.products[4]
															.post_title
													: ""
											}
											link={"/item/" + 4}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[7]
													? store.products[7].image
													: ""
											}
											title={
												store.products[7]
													? store.products[7]
															.post_title
													: ""
											}
											link={"/item/" + 7}
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

export default FeaturedList;
