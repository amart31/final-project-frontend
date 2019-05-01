import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

import RentByCategoryNav from "../component/rentByCategoryNav.js";
import { Footer } from "../component/footer.jsx";

import "../../styles/rent.css";

export class Rent extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron jumbotron-fluid text-primary">
					<div className="container-full-bg">
						<h1 className="display-4">Products</h1>
					</div>
				</div>
				<div className="row">
					<div className="col align-self-start">
						<RentByCategoryNav />
					</div>
					<Context.Consumer>
						{({ store, actions }) => {
							return store.products.map((item, index) => {
								return (
									<div
										className="col col-md-3 align-self-center content"
										key={item.ID}>
										<div className="product-card">
											<div className="product-image">
												<Link to={"/item/" + item.ID}>
													<img
														className="pic-1"
														src={item.image}
													/>
													<img
														className="pic-2"
														src={item.image}
													/>
												</Link>
												<ul className="social">
													<li>
														<a
															onClick={() => {
																actions.addToWishList(
																	item
																);
															}}>
															<i className="fa fa-shopping-bag" />
														</a>
													</li>
													<li>
														<a
															onClick={() => {
																actions.addToCart(
																	item
																);
															}}>
															<i className="fa fa-shopping-cart" />
														</a>
													</li>
												</ul>
												<span className="product-new-label">
													New
												</span>
											</div>
											<div className="product-content">
												<h3 className="title">
													<a>{item.post_title}</a>
												</h3>
												<div className="price">
													{
														item.meta_keys
															.product_price
													}
													<span>$75.00</span>
												</div>
												<ul className="rating">
													<li className="fa fa-star" />
													<li className="fa fa-star" />
													<li className="fa fa-star" />
													<li className="fa fa-star disable" />
													<li className="fa fa-star disable" />
												</ul>
											</div>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>

					<br />
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
				<Footer />
			</div>
		);
	}
}
Rent.propTypes = {
	match: PropTypes.object
};
