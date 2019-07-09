import React from "react";
// Reacstrap import
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default class HowItWorks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: "1",
			modalLease1: false,
			modalLease2: false,
			modalLease3: false,
			modalRent1: false,
			modalRent2: false,
			modalRent3: false
		};
		this.toggle = this.toggle.bind(this);
		this.toggleModalLease1 = this.toggleModalLease1.bind(this);
		this.toggleModalLease2 = this.toggleModalLease2.bind(this);
		this.toggleModalLease3 = this.toggleModalLease3.bind(this);
		this.toggleModalRent1 = this.toggleModalRent1.bind(this);
		this.toggleModalRent2 = this.toggleModalRent2.bind(this);
		this.toggleModalRent3 = this.toggleModalRent3.bind(this);
	}

	toggle(tab) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	toggleModalLease1() {
		this.setState(prevState => ({
			modalLease1: !prevState.modalLease1
		}));
	}
	toggleModalLease2() {
		this.setState(prevState => ({
			modalLease2: !prevState.modalLease2
		}));
	}
	toggleModalLease3() {
		this.setState(prevState => ({
			modalLease3: !prevState.modalLease3
		}));
	}
	toggleModalRent1() {
		this.setState(prevState => ({
			modalRent1: !prevState.modalRent1
		}));
	}
	toggleModalRent2() {
		this.setState(prevState => ({
			modalRent2: !prevState.modalRent2
		}));
	}
	toggleModalRent3() {
		this.setState(prevState => ({
			modalRent3: !prevState.modalRent3
		}));
	}

	render() {
		return (
			<div>
				<div className="switcher">
					<Nav tabs>
						<NavItem>
							<NavLink
								className={classnames({
									active: this.state.activeTab === "1"
								})}
								onClick={() => {
									this.toggle("1");
								}}>
								Lease your clothes
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
								Rent your clothes
							</NavLink>
						</NavItem>
					</Nav>
				</div>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<div className="container steplist">
							<div className="row">
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalLease1}>
											1
										</button>
										<Modal
											isOpen={this.state.modalLease1}
											toggle={this.toggleModalLease1}>
											<ModalHeader
												toggle={this.toggleModalLease1}>
												Open an account
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														So you decided to take
														the plunge and have
														another source of
														income?
													</li>

													<li>
														Got fresh clothes ready
														to ship and make you
														money?
													</li>
													<li>
														Then make an account and
														list your clothes, we
														insure every rental so
														dont even worry about
														it. We got you.
													</li>
												</ul>
											</ModalBody>
											<ModalFooter>
												<Link to="/signup">
													<Button color="primary">
														Register
													</Button>
												</Link>
											</ModalFooter>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												List your clothes
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://images.pexels.com/photos/1266007/pexels-photo-1266007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalLease2}>
											2
										</button>
										<Modal
											isOpen={this.state.modalLease2}
											toggle={this.toggleModalLease2}>
											<ModalHeader
												toggle={this.toggleModalLease2}>
												So you opened the account?
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														Once you post your items
														people will be able to
														rent them
													</li>

													<li>
														Once a person rents the
														clothes we will send you
														a shipping
														label(*FREE*). You can
														now ship them, we have
														rentals from 3 days to 2
														weeks.
													</li>
													<li>
														While you wait for your
														clothes why not rent a
														new fresh pair of patns
														while you wait for the
														renter to send it back.
													</li>
												</ul>
											</ModalBody>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												Rent your clothes
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://as2.ftcdn.net/jpg/00/49/66/17/500_F_49661779_t6gq80LMzcxzH0KLcQF6LnnbG6uSnShW.jpg"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalLease3}>
											3
										</button>
										<Modal
											isOpen={this.state.modalLease3}
											toggle={this.toggleModalLease3}>
											<ModalHeader
												toggle={this.toggleModalLease3}>
												Get your items back
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														So its been a week and
														the renter sent back
														your sneakers? Now what?
													</li>

													<li>
														It is our policy to have
														the cleanest clothes on
														the market, therefore
														when you receive your
														clothes you will also
														recieve an extra bit of
														cash so you can dry
														clean your items.
													</li>
													<li>
														Make everyday that you
														dont have your items
														listed count, time is
														money after all.
													</li>
													<li>
														Feel free to read our
														insurance policy to
														understand how we make
														sure your items never
														get stolen or damaged.
													</li>
												</ul>
											</ModalBody>
											<ModalFooter>
												<Link to="/insurance">
													<Button color="primary">
														Insurance policy
													</Button>
												</Link>
											</ModalFooter>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 3:</strong>
												Receive, Rock, rerent
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://t3.ftcdn.net/jpg/01/26/87/04/240_F_126870421_jHjuJfsLESyPobRNg6zhlSNHD4j7xp6W.jpg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPane>
					<TabPane tabId="2">
						<div className="container steplist">
							<div className="row">
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalRent1}>
											1
										</button>
										<Modal
											isOpen={this.state.modalRent1}
											toggle={this.toggleModalRent1}>
											<ModalHeader
												toggle={this.toggleModalRent1}>
												Register and Order
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														Registration takes less
														than 5 minutes. All you
														need is a invitation
														code, a valid driver
														liscence and a cc or
														paypal account.
													</li>

													<li>
														Once set up, look
														through our feed and
														find the perfect fit for
														the weekend.
													</li>
													<li>
														All of your orders are
														insured covered by our
														$5 insurance policy. If
														you scratch it, dont
														worry we got you.
													</li>
													<li>
														Please remember the
														React Closet
														decentrilized network
														can only function
														through good faith. With
														that being said, we have
														a strict one strike and
														youre perma ban policy.
													</li>
												</ul>
											</ModalBody>
											<ModalFooter>
												<Link to="/signup">
													<Button color="primary">
														Sign Up
													</Button>
												</Link>
											</ModalFooter>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												register and order
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://as1.ftcdn.net/jpg/01/03/25/24/500_F_103252493_JUc5rXG6ThFWFZhQE4NwQPrCTkmFa0Fk.jpg"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalRent2}>
											2
										</button>
										<Modal
											isOpen={this.state.modalRent2}
											toggle={this.toggleModalRent2}>
											<ModalHeader
												toggle={this.toggleModalRent2}>
												Receive and Rock
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														Eyy so you got your new
														swag for the weekend?
													</li>

													<li>
														Feel free to wear it as
														it is, we disninfect all
														of our items as soon as
														we receive them so you
														can rock it right out
														the UPS box.
													</li>
													<li>
														We have lease terms from
														as short as two days to
														as long as 3 weeks.
													</li>
												</ul>
											</ModalBody>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 2:</strong>
												Recieve and rock
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://images.pexels.com/photos/1822845/pexels-photo-1822845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<button
											className="stepnumber"
											onClick={this.toggleModalRent3}>
											3
										</button>
										<Modal
											isOpen={this.state.modalRent3}
											toggle={this.toggleModalRent3}>
											<ModalHeader
												toggle={this.toggleModalRent3}>
												Receive and Rock
											</ModalHeader>
											<ModalBody>
												<ul>
													<li>
														Once your time is up
														just use the same
														shipping label that was
														inside of the original
														box to ship back to our
														shipping center.
													</li>

													<li>
														As soon as you send back
														the item you can start
														renting other ones.
													</li>

													<li>
														What you waiting for?
														Register now.
													</li>
												</ul>
											</ModalBody>
										</Modal>
										<div className="stepcard-body">
											<h5>
												<strong>Step 3:</strong>
												Return and repeat
											</h5>
											<img
												className="stepcard-img"
												width="300"
												height="218"
												src="https://as1.ftcdn.net/jpg/02/10/12/92/500_F_210129241_fc3EDLMgqyVqgeZicp0k9VQ7EarQb6X6.jpg"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
