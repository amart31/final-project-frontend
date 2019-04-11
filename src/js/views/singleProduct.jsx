import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import { Jumbotron, Button } from "reactstrap";
export class Item extends React.Component {
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
											].product_description
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
															id="item-display"
															src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
															alt=""
														/>
													</center>
												</div>

												<div className="container service1-items col-sm-2 col-md-2 pull-left">
													<center>
														<a
															id="item-1"
															className="service1-item">
															<img
																src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
																alt=""
															/>
														</a>
														<a
															id="item-2"
															className="service1-item">
															<img
																src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
																alt=""
															/>
														</a>
														<a
															id="item-3"
															className="service1-item">
															<img
																src="http://www.corsair.com/Media/catalog/product/g/s/gs600_psu_sideview_blue_2.png"
																alt=""
															/>
														</a>
													</center>
												</div>
											</div>

											<div className="col-md-7">
												<div className="product-title">
													Corsair GS600 600 Watt PSU
												</div>
												<div className="product-desc">
													The Corsair Gaming Series
													GS600 is the ideal
													price/performance choice for
													mid-spec gaming PC
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
													$ 1234.00
												</div>
												<div className="product-stock">
													In Stock
												</div>
												<hr />
												<div className="btn-group cart">
													<button
														type="button"
														className="btn btn-success">
														Add to cart
													</button>
												</div>
												<div className="btn-group wishlist">
													<button
														type="button"
														className="btn btn-danger">
														Add to wishlist
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="container-fluid">
										<div className="col-md-12 product-info">
											<ul
												id="myTab"
												className="nav nav-tabs nav_tabs">
												<li className="active">
													<a
														href="#service-one"
														data-toggle="tab">
														DESCRIPTION
													</a>
												</li>
												<li>
													<a
														href="#service-two"
														data-toggle="tab">
														PRODUCT INFO
													</a>
												</li>
												<li>
													<a
														href="#service-three"
														data-toggle="tab">
														REVIEWS
													</a>
												</li>
											</ul>
											<div
												id="myTabContent"
												className="tab-content">
												<div
													className="tab-pane fade in active"
													id="service-one">
													<section className="container product-info">
														The Corsair Gaming
														Series GS600 power
														supply is the ideal
														price-performance
														solution for building or
														upgrading a Gaming PC. A
														single +12V rail
														provides up to 48A of
														reliable, continuous
														power for multi-core
														gaming PCs with multiple
														graphics cards. The
														ultra-quiet, dual
														ball-bearing fan
														automatically adjusts
														its speed according to
														temperature, so it will
														never intrude on your
														music and games. Blue
														LEDs bathe the
														transparent fan blades
														in a cool glow. Not
														feeling blue? You can
														turn off the lighting
														with the press of a
														button.
														<h3>
															Corsair Gaming
															Series GS600
															Features:
														</h3>
														<li>
															It supports the
															latest ATX12V v2.3
															standard and is
															backward compatible
															with ATX12V 2.2 and
															ATX12V 2.01 systems
														</li>
														<li>
															An ultra-quiet 140mm
															double ball-bearing
															fan delivers great
															airflow at an very
															low noise level by
															varying fan speed in
															response to
															temperature
														</li>
														<li>
															80Plus certified to
															deliver 80%
															efficiency or higher
															at normal load
															conditions (20% to
															100% load)
														</li>
														<li>
															0.99 Active Power
															Factor Correction
															provides clean and
															reliable power
														</li>
														<li>
															Universal AC input
															from 90~264V — no
															more hassle of
															flipping that tiny
															red switch to select
															the voltage input!
														</li>
														<li>
															Extra long
															fully-sleeved cables
															support full tower
															chassis
														</li>
														<li>
															A three year
															warranty and
															lifetime access to
															Corsair’s legendary
															technical support
															and customer service
														</li>
														<li>
															Over
															Current/Voltage/Power
															Protection, Under
															Voltage Protection
															and Short Circuit
															Protection provide
															complete component
															safety
														</li>
														<li>
															Dimensions: 150mm(W)
															x 86mm(H) x 160mm(L)
														</li>
														<li>
															MTBF: 100,000 hours
														</li>
														<li>
															Safety Approvals:
															UL, CUL, CE, CB, FCC
															className B, TÜV,
															CCC, C-tick
														</li>
													</section>
												</div>
												<div
													className="tab-pane fade"
													id="service-two">
													<section className="container" />
												</div>
												<div
													className="tab-pane fade"
													id="service-three"
												/>
											</div>
										</div>
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

Item.propTypes = {
	match: PropTypes.object
};
Jumbotron.propTypes = {
	classNameName: PropTypes.string,
	productName: PropTypes.string,
	productDescription: PropTypes.string
};
