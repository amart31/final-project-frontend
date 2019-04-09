import React from "react";
import "../../styles/sortableColumnHeader.css";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

export default class SortableColumnHeader extends React.Component {
	constructor(props) {
		super(props);
		this.handleSort = this.handleSort.bind(this);
	}
	handleSort(e) {
		this.props.onSort(this.props.column, e.target.name);
	}
	render() {
		let currentSort =
			this.props.currentSort.column === this.props.column
				? this.props.currentSort.direction
				: false;
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<th>
							{this.props.column}
							<button
								onClick={this.handleSort}
								className={
									currentSort === "asc"
										? "SortableColumnHeader-current"
										: ""
								}
								name="asc">
								&#x25B2;
							</button>
							<button
								onClick={this.handleSort}
								className={
									currentSort === "desc"
										? "SortableColumnHeader-current"
										: ""
								}
								name="desc">
								&#x25BC;
							</button>
						</th>
					);
				}}
			</Context.Consumer>
		);
	}
}

SortableColumnHeader.propTypes = {
	column: PropTypes.string,
	currentSort: PropTypes.object,
	onSort: PropTypes.func
};
