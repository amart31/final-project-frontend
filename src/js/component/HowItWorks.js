import React from "react";
// Reacstrap import
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
//Styles import
import "../../styles/howitworks.css";

let style = {
	borderBottom: "3px solid #4a82db",
	marginBottom: "25px"
};

export default class HowItWorks extends React.Component {
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
				<div className="switcher">
					<Nav tabs style={style}>
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
										<div className="stepnumber">1</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												List your clothes homes
											</h5>
											<img
												width="300"
												height="218"
												src="https://images.pexels.com/photos/1266007/pexels-photo-1266007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<div className="stepnumber">2</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												Rent your clothes homes
											</h5>
											<img
												width="300"
												height="218"
												src="https://as2.ftcdn.net/jpg/00/49/66/17/500_F_49661779_t6gq80LMzcxzH0KLcQF6LnnbG6uSnShW.jpg"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<div className="stepnumber">3</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 3:</strong>
												Receive, Rock, rerent
											</h5>
											<img
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
										<div className="stepnumber">1</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 1:</strong>
												register and order
											</h5>
											<img
												width="300"
												height="218"
												src="https://as1.ftcdn.net/jpg/01/03/25/24/500_F_103252493_JUc5rXG6ThFWFZhQE4NwQPrCTkmFa0Fk.jpg"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<div className="stepnumber">2</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 2:</strong>
												Recieve and rock
											</h5>
											<img
												width="300"
												height="218"
												src="https://images.pexels.com/photos/1822845/pexels-photo-1822845.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="stepcard">
										<div className="stepnumber">3</div>
										<div className="stepcard-body">
											<h5>
												<strong>Step 3:</strong>
												Return and repeat
											</h5>
											<img
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
