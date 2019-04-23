import React from "react";

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Row,
	CardSubtitle,
	Button
} from "reactstrap";

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
							<Card key={index}>
								<CardImg
									className="card-img-top"
									top
									width="100%"
									src={item.item.image}
									alt="Card image cap"
								/>
								<CardBody>
									<Link to={"/item/" + item.item.ID}>
										<CardTitle>
											{item.item.post_title}
										</CardTitle>
									</Link>
									<CardText>
										{
											item.item.meta_keys
												.product_description
										}
									</CardText>
									<Button
										onClick={() => {
											this.setState({
												shoppingCart: actions.addToCart(
													item.item
												)
											});
										}}>
										Add to Cart
									</Button>
								</CardBody>
							</Card>
						);
					});
				}}
			</Context.Consumer>
		);
	}
}
