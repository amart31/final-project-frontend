import React from "react";
import SavedItemCard from "./wishListItemCard.jsx";

import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Button,
	Row,
	Col
} from "reactstrap";

import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import classnames from "classnames";

export default class AccountTabs extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: "1"
		};
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<div>
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "1"
							})}
							onClick={() => {
								this.toggle("1");
							}}>
							Account
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "2"
							})}
							onClick={() => {
								this.toggle("2");
							}}>
							Orders
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "3"
							})}
							onClick={() => {
								this.toggle("3");
							}}>
							Products
						</NavLink>
					</NavItem>

					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === "4"
							})}
							onClick={() => {
								this.toggle("4");
							}}>
							Saved
						</NavLink>
					</NavItem>
				</Nav>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn) {
							return (
								<TabContent activeTab={this.state.activeTab}>
									<TabPane tabId="1">
										<Row>
											<Col sm="12">
												<h4 className="text-center">
													Account
												</h4>
											</Col>
											<Col sm="12">
												<div className="container-fluid mt-2">
													<img
														src="https://picsum.photos/150/150/?random"
														className="floatLeft mr-3"
														alt="..."
														style={{
															borderRadius: "50%"
														}}
													/>
													<div className="d-flex flex-column">
														<h1 className="lead">
															{"Username: " +
																store.session
																	.user_nicename}
														</h1>

														<p>
															{" "}
															{"Email: " +
																store.session
																	.user_email}
														</p>
													</div>
												</div>
											</Col>
										</Row>
									</TabPane>
									<TabPane tabId="2">
										<Row>
											<Col sm="12">
												<h4>Orders</h4>
											</Col>
										</Row>
									</TabPane>

									<TabPane tabId="3">
										<Row>
											<Col sm="12">
												<h4>Products</h4>
											</Col>
										</Row>
									</TabPane>

									<TabPane tabId="4">
										<Row>
											<Col sm="12">
												<h4>Saved</h4>
											</Col>
											<div>
												<SavedItemCard />
											</div>
										</Row>
									</TabPane>
								</TabContent>
							);
						} else {
							return (
								<TabContent activeTab={this.state.activeTab}>
									<TabPane tabId="1">
										<Row>
											<Col sm="12">
												<h4>
													You must be Logged in to
													view your account.
												</h4>
											</Col>
											<Col sm="12">
												<Link to="/login/">
													<Button color="primary">
														Log In
													</Button>
												</Link>
												<Link to="/signup/">
													<Button color="success">
														Sign Up
													</Button>
												</Link>
											</Col>
										</Row>
									</TabPane>
								</TabContent>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
