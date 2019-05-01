import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";

export default class SavedItemCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			wishList: []
		};
	}
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.wishList.map((item, index) => {
						return (
							<div className="col" key={index}>
								<div className="product-card">
									<div className="product-image">
										<Link to={"/item/" + item.ID}>
											<img
												className="pic-1"
												src={item.item.image}
											/>
											<img
												className="pic-2"
												src={item.item.image}
											/>
										</Link>
										<ul className="social">
											<li>
												<a
													onClick={() => {
														actions.addToCart(item);
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
											<a>{item.item.post_title}</a>
										</h3>
										<div className="price">
											{item.item.meta_keys.product_price}
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
		);
	}
}
