import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import {
	Jumbotron,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	Container,
	CardText,
	Row,
	Col
} from "reactstrap";
import classnames from "classnames";

export class Item extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1"
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container-fluid">
								<Jumbotron>
									<h1 className="display-3">
										{
											store.products[
												this.props.match.params.theid
											].post_title
										}
									</h1>
									<p className="lead">
										{
											store.products[
												this.props.match.params.theid
											].meta_keys.product_description
										}
									</p>
									<hr className="my-2" />
									<p className="lead">
										<Button color="primary">
											Add to Cart
										</Button>
									</p>
								</Jumbotron>

								<div className="content-wrapper">
									<div className="item-container">
										<div className="container">
											<div className="col-md-12">
												<div className="product col-md-3 service-image-left">
													<center>
														<img
															src={
																store.products[
																	this.props
																		.match
																		.params
																		.theid
																].image
															}
															alt=""
														/>
													</center>
												</div>
											</div>

											<div className="col-md-7">
												<div className="product-title">
													{
														store.products[
															this.props.match
																.params.theid
														].post_title
													}
												</div>
												<div className="product-desc">
													{
														store.products[
															this.props.match
																.params.theid
														].meta_keys
															.product_description
													}
												</div>
												<div className="product-rating">
													<i className="fa fa-star gold" />{" "}
													<i className="fa fa-star gold" />{" "}
													<i className="fa fa-star gold" />{" "}
													<i className="fa fa-star gold" />{" "}
													<i className="fa fa-star-o" />{" "}
												</div>
												<hr />
												<div className="product-price">
													$
													{
														store.products[
															this.props.match
																.params.theid
														].meta_keys
															.product_price
													}
												</div>
												<div className="product-stock">
													In Stock
												</div>
												<hr />
												<div className="btn-group cart">
													<Button color="success">
														Add to cart
													</Button>

													<Button color="danger">
														Add to wishlist
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div>
									<Nav tabs>
										<NavItem>
											<NavLink
												className={classnames({
													active:
														this.state.activeTab ===
														"1"
												})}
												onClick={() => {
													this.toggle("1");
												}}>
												Description
											</NavLink>
										</NavItem>
										<NavItem>
											<NavLink
												className={classnames({
													active:
														this.state.activeTab ===
														"2"
												})}
												onClick={() => {
													this.toggle("2");
												}}>
												Reviews
											</NavLink>
										</NavItem>
									</Nav>
									<TabContent
										activeTab={this.state.activeTab}>
										<TabPane tabId="1">
											<Row>
												<Col sm="12">
													<h4>
														{
															store.products[
																this.props.match
																	.params
																	.theid
															].post_title
														}
													</h4>
												</Col>
											</Row>
											<Row>
												<Col sm="12">
													<Card body>
														<CardTitle>
															{
																store.products[
																	this.props
																		.match
																		.params
																		.theid
																].meta_keys
																	.brand
															}
														</CardTitle>
														<CardText>
															{
																store.products[
																	this.props
																		.match
																		.params
																		.theid
																].meta_keys
																	.product_description
															}
														</CardText>
														<Button>
															Add to Cart
														</Button>
													</Card>
												</Col>
											</Row>
										</TabPane>

										<TabPane tabId="2">
											<Row>
												<Col sm="6">
													<h4>Reviews</h4>
												</Col>
											</Row>
										</TabPane>
									</TabContent>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Item.propTypes = {
	match: PropTypes.object
};
Jumbotron.propTypes = {
	classNameName: PropTypes.string,
	productName: PropTypes.string,
	productDescription: PropTypes.string
};
