import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export default class FilterProducts extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		const value =
			e.target[e.target.type === "checkbox" ? "checked" : "value"];
		const name = e.target.name;

		this.props.onFilter({
			[name]: value
		});
	}
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form>
								<input
									type="text"
									placeholder="Search..."
									value={this.props.filterText}
									name="filterText"
									onChange={this.handleChange}
								/>
								<p>
									<input
										type="checkbox"
										checked={this.props.inStockOnly}
										name="inStockOnly"
										onChange={this.handleChange}
									/>
									Only show stocked products
								</p>
							</form>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

FilterProducts.propTypes = {
	filterText: PropTypes.string,
	inStockOnly: PropTypes.bool,
	onFilter: PropTypes.func
};
