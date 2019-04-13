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
												store.products[0]
													? store.products[0].image
													: ""
											}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[1]
													? store.products[1].image
													: ""
											}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[2]
													? store.products[2].image
													: ""
											}
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
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[4]
													? store.products[4].image
													: ""
											}
										/>
									</div>
									<div className="col-md pt-2 pb-2">
										<FeaturedProducts
											source={
												store.products[5]
													? store.products[5].image
													: ""
											}
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
