import React from "react";

import FilterProducts from "../component/filterProducts.js";
import ProductTable from "../component/productTable.js";
import ProductForm from "../component/productForm.js";

import { Context } from "../store/appContext.jsx";

export class Products extends React.Component {
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
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<FilterProducts
									filterText={this.state.filterText}
									inStockOnly={this.state.inStockOnly}
									onFilter={this.handleFilter}
								/>
								<ProductTable
									products={this.state.products}
									filterText={this.state.filterText}
									inStockOnly={this.state.inStockOnly}
									onDestroy={this.handleDestroy}
								/>
								<ProductForm onSave={this.saveProduct} />
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
