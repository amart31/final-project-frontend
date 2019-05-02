import React from "react";

import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import RentByCategoryNav from "../component/rentByCategoryNav.js";
import { Footer } from "../component/footer.jsx";
import "../../styles/rentByCategory.css";

export class RentByCategory extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron jumbotron-fluid text-primary">
					<div className="container-full-bg">
						<h1 className="display-4">Products by Category</h1>
					</div>
				</div>
				<div className="row">
					<div className="col align-self-start">
						<RentByCategoryNav />
					</div>
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
			</div>
		);
	}
}

RentByCategory.propTypes = {
	match: PropTypes.object
};
