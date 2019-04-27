import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	Container,
	Row,
	Jumbotron
} from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

import FilterProducts from "../component/filterProducts.js";
import ProductForm from "../component/productForm.js";

import { Footer } from "../component/footer.jsx";

import "../../styles/rent.css";

export class Rent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			inStockOnly: false,
			products: []
		};
		this.handleFilter = this.handleFilter.bind(this);
		this.handleDestroy = this.handleDestroy.bind(this);
		this.saveProduct = this.saveProduct.bind(this);
	}
	handleFilter(filterInput) {
		this.setState(filterInput);
	}
	saveProduct(product) {
		if (!product.id) {
			product.id = new Date().getTime();
		}
		this.setState(prevState => {
			let products = prevState.products;
			products[product.id] = product;
			return { products };
		});
	}
	handleDestroy(productId) {
		this.setState(prevState => {
			let products = prevState.products;
			delete products[productId];
			return { products };
		});
	}
	render() {
		return (
			<Container>
				<Jumbotron fluid className="jumbotron text-primary">
					<Container fluid>
						<h1 className="display-3">Products</h1>
					</Container>
				</Jumbotron>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<FilterProducts
									filterText={this.state.filterText}
									inStockOnly={this.state.inStockOnly}
									onFilter={this.handleFilter}
								/>

								<ProductForm onSave={this.saveProduct} />
							</div>
						);
					}}
				</Context.Consumer>
				<div className="container-fluid">
					<Row>
						<Context.Consumer>
							{({ store, actions }) => {
								return store.products.map((item, index) => {
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
													<Link
														to={"/item/" + item.ID}>
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
																this.setState({
																	shoppingCart: actions.addToCart(
																		item
																	)
																});
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
					</Row>
					<br />
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
				<Footer />
			</Container>
		);
	}
}
Rent.propTypes = {
	match: PropTypes.object
};
Jumbotron.propTypes = {
	className: PropTypes.string
};
CardImg.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string,
	// Use top or bottom to position image via "card-img-top" or "card-img-bottom"
	top: PropTypes.bool
};
