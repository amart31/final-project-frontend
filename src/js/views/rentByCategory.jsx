import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

export class RentByCategory extends React.Component {
	render() {
		return (
			<div className="container">
				<h2 className="brand-head p-2 text-center">Products</h2>
				<div className="row product-list">
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
										className="col-md-6 col-lg-4 pb-2"
										key={item.ID}>
										<Card>
											<CardImg
												className="card-img-top"
												top
												width="100%"
												src={item.image}
												alt="Card image cap"
											/>
											<CardBody>
												<Link to={"/item/" + item.ID}>
													<CardTitle>
														{item.post_title}
													</CardTitle>
												</Link>
												<CardSubtitle>
													&#36;
													{
														item.meta_keys
															.product_price
													}
												</CardSubtitle>
												<CardText>
													{
														item.meta_keys
															.product_brand
													}
												</CardText>
												<div className="d-flex justify-content-between">
													<Button
														color="success"
														onClick={() => {
															actions.addToCart(
																item
															);
														}}>
														Add to Cart
													</Button>
													<Button
														color="danger"
														onClick={() => {
															actions.addToWishList(
																item
															);
														}}>
														<i className="far fa-heart" />
													</Button>
												</div>
											</CardBody>
										</Card>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

RentByCategory.propTypes = {
	match: PropTypes.object
};
