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
								<div
									className="card rounded m-3"
									key={item.item.ID}>
									<div className="card-image">
										<span
											className="card-notify-addToCart"
											onClick={() => {
												actions.addToCart(item.item);
											}}>
											<i className="fa fa-shopping-cart" />
										</span>
										<img
											className="card-img-top"
											src={item.item.image}
											alt="for rent"
										/>
									</div>
									<div className="card-image-overlay m-auto">
										<span className="card-detail-badge">
											{item.item.meta_keys.category}
										</span>
										<span className="card-detail-badge">
											{item.item.meta_keys.product_brand}
										</span>
										<span className="card-detail-badge">
											{"$ " +
												item.item.meta_keys
													.product_price}
										</span>
									</div>
									<div className="card-body text-center">
										<div className="ad-title m-auto">
											<h5>{item.item.post_title}</h5>
										</div>
										<Link to={"/item/" + item.item.ID}>
											<button className="ad-btn">
												View
											</button>
										</Link>
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
