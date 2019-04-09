import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";
import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Rent extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.products.map((item, index) => {
							return (
								<div key={index}>
									<Card>
										<CardImg
											top
											width="100%"
											src={item.image}
											alt="Card image cap"
										/>
										<CardBody>
											<Link to={"/item/" + item.name}>
												<CardTitle>
													{item.name}
												</CardTitle>
											</Link>
											<CardSubtitle>
												Card subtitle
											</CardSubtitle>
											<CardText>
												{item.description}
											</CardText>
											<Button
												onClick={() => {
													this.setState({
														shoppingCart: actions.addToCart(
															item
														)
													});
												}}>
												Add to Cart
											</Button>
										</CardBody>
									</Card>
								</div>
							);
						});
					}}
				</Context.Consumer>
				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
