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
	Col
} from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

import FilterProducts from "../component/filterProducts.js";
import ProductForm from "../component/productForm.js";

import "../../styles/demo.css";

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
					<Context.Consumer>
						{({ store, actions }) => {
							return store.products.map((item, index) => {
								return (
									<Row key={index}>
										<Col sm="3">
											<Card>
												<CardImg
													top
													width="100%"
													src={item.image}
													alt="Card image cap"
												/>
												<CardBody>
													<Link
														to={
															"/item/" +
															item.meta_keys
																.product_brand
														}>
														<CardTitle>
															{item.post_title}
														</CardTitle>
													</Link>
													<CardText>
														{
															item.meta_keys
																.product_brand
														}
													</CardText>
													<Button
														onClick={() => {
															this.setState({
																shoppingCart: actions.addToCart(
																	item
																)
															});
														}}>
														Add to Cart
													</Button>
												</CardBody>
											</Card>
										</Col>
									</Row>
								);
							});
						}}
					</Context.Consumer>
					<br />
					<Link to="/">
						<button className="btn btn-primary">Back home</button>
					</Link>
				</div>
			</Container>
		);
	}
}

CardImg.propTypes = {
	src: PropTypes.string,
	className: PropTypes.string,
	// Use top or bottom to position image via "card-img-top" or "card-img-bottom"
	top: PropTypes.bool
};
