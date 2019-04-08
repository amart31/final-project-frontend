import React from "react";
import PropTypes from "prop-types";

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
			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
				<td>
					<button onClick={this.destroy}>x</button>
				</td>
			</tr>
		);
	}
}

ProductRow.propTypes = {
	product: PropTypes.object,
	onDestroy: PropTypes.func
};
