import React from "react";
import ProductRow from "../component/productRow.js";
import SortableColumnHeader from "../component/sortableColumnHeader.js";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

export default class ProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
		this.state = {
			sort: {
				column: "name",
				direction: "desc"
			}
		};
	}
	sortByKeyAndOrder(objA, objB) {
		let isDesc = this.state.sort.direction === "desc" ? 1 : -1;
		let [a, b] = [
			objA[this.state.sort.column],
			objB[this.state.sort.column]
		];
		if (this.state.sort.column === "price") {
			[a, b] = [a, b].map();
		}
		if (a > b) {
			return 1 * isDesc;
		}
		if (a < b) {
			return -1 * isDesc;
		}
		return 0;
	}
	sortProducts() {
		let productsAsArray = Object.keys(this.props.products).map(
			pid => this.props.products[pid]
		);
		return productsAsArray.sort(this.sortByKeyAndOrder);
	}
	handleDestroy(id) {
		this.props.onDestroy(id);
	}
	handleSort(column, direction) {
		this.setState({
			sort: {
				column: column,
				direction: direction
			}
		});
	}
	render() {
		var rows = [];
		this.sortProducts().forEach(product => {
			if (
				product.name.indexOf(this.props.filterText) === -1 ||
				(!product.stocked && this.props.inStockOnly)
			) {
				return;
			}
			rows.push(
				<ProductRow
					product={product}
					key={product.id}
					onDestroy={this.handleDestroy}
				/>
			);
		});

		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<table>
								<thead>
									<tr>
										<SortableColumnHeader
											onSort={this.handleSort}
											currentSort={this.state.sort}
											column="name"
										/>
										<SortableColumnHeader
											onSort={this.handleSort}
											currentSort={this.state.sort}
											column="price"
										/>
									</tr>
								</thead>
								<tbody>{rows}</tbody>
							</table>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

ProductTable.propTypes = {
	products: PropTypes.object,
	filter: PropTypes.func,
	inStockOnly: PropTypes.bool,
	onDestroy: PropTypes.func,
	filterText: PropTypes.string
};
