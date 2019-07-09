import React from "react";

import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import RentByCategoryNav from "../component/rentByCategoryNav.js";
import { Footer } from "../component/footer.jsx";

export class RentByCategory extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<React.Fragment>
				<RentByCategoryNav />
				<div
					className="row"
					style={{ marginLeft: "200px", marginRight: "0" }}>
					<Context.Consumer>
						{({ store, actions }) => {
							let product = store.products.filter(
								(item, index) => {
									if (
										item.meta_keys.category.includes(
											this.props.match.params.category
										)
									) {
										return item;
									}
								}
							);
							return product.map((item, index) => {
								return (
									<div
										className="card rounded m-3 productCard"
										key={item.ID}>
										<div className="card-image">
											<span
												className="card-notify-wishList"
												onClick={() => {
													actions.addToWishList(item);
												}}>
												<i className="fa fa-shopping-bag" />
											</span>
											<span
												className="card-notify-addToCart"
												onClick={() => {
													actions.addToCart(item);
												}}>
												<i className="fa fa-shopping-cart" />
											</span>
											<img
												className="card-img-top"
												src={item.image}
												alt="for rent"
											/>
										</div>
										<div className="card-image-overlay m-auto">
											<span className="card-detail-badge">
												{item.meta_keys.category}
											</span>
											<span className="card-detail-badge">
												{item.meta_keys.product_brand}
											</span>
											<span className="card-detail-badge">
												{"$ " +
													item.meta_keys
														.product_price}
											</span>
										</div>
										<div className="card-body text-center">
											<div className="ad-title m-auto">
												<h5>{item.post_title}</h5>
											</div>
											<Link to={"/item/" + item.ID}>
												<button className="ad-btn">
													View
												</button>
											</Link>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>

				<Footer />
			</React.Fragment>
		);
	}
}

RentByCategory.propTypes = {
	match: PropTypes.object
};
