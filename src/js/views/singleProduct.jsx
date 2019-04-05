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
							<Jumbotron>
								<h1 className="display-3">
									{
										store.products[
											this.props.match.params.theid
										].productName
									}
								</h1>
								<p className="lead">
									{
										store.products[
											this.props.match.params.theid
										].productDescription
									}
								</p>
								<hr className="my-2" />
								<p className="lead">
									<Button color="primary">Add to Cart</Button>
								</p>
							</Jumbotron>
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
	className: PropTypes.string,
	productName: PropTypes.string,
	productDescription: PropTypes.string
};
