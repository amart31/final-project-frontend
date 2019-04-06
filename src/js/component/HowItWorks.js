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
						<div className="stepnumber">Step 1</div>
						<div className="vl" />
						<div className="stepdetails">List your item</div>
						<div className="vl" />
						<div className="stepnumber">Step 2</div>
						<div className="vl" />
						<div className="stepdetails">Ship item, make money</div>
						<div className="vl" />
						<div className="stepnumber">Step 3</div>
						<div className="vl" />
						<div className="stepdetails">
							Get item back and rent again
						</div>
					</TabPane>
					<TabPane tabId="2">
						<div className="stepnumber">Step 1</div>
						<div className="vl" />
						<div className="stepdetails">
							Order your product with ease of mind
						</div>
						<div className="vl" />
						<div className="stepnumber">Step 2</div>
						<div className="vl" />
						<div className="stepdetails">
							Recieve it, wear it, rock it.
						</div>
						<div className="vl" />
						<div className="stepnumber">Step 3</div>
						<div className="vl" />
						<div className="stepdetails">
							Return after swagfest and repeat for other items
						</div>
					</TabPane>
				</TabContent>
			</div>
		);
	}
}
