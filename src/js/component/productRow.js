import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/ProductRow.css";

export default class ProductRow extends React.Component {
	constructor(props) {
		super(props);
		this.destroy = this.destroy.bind(this);
	}
	destroy() {
		this.props.onDestroy(this.props.product.id);
	}
	render() {
		var name = this.props.product.stocked ? (
			this.props.product.name
		) : (
			<span style={{ color: "red" }}>{this.props.product.name}</span>
		);
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.shoppingCart.map((item, index) => {
						return (
							<tr key={index}>
								<td>{name}</td>
								<td>{item.price}</td>
								<td>
									<button
										onClick={() => {
											this.setState({
												shoppingCart: actions.addToCart(
													item
												)
											});
										}}>
										Cart
									</button>
								</td>
							</tr>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}

ProductRow.propTypes = {
	product: PropTypes.object,
	onDestroy: PropTypes.func
};
