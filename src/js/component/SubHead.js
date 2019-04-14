import React from "react";
import SubHeadCard from "./functional/SubHeadCard";
import { Link } from "react-router-dom";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3">
			<Link to="/contact">
				<div className="d-inline-block m-3">
					<SubHeadCard
						style={{ background: "#4286f4" }}
						text="Contact Us"
					/>
				</div>
			</Link>
			<Link to="/rent">
				<div className="d-inline-block m-3">
					<SubHeadCard
						style={{ background: "#7d39d6" }}
						text="Shop the feed"
					/>
				</div>
			</Link>
			<Link to="/login">
				<div className="d-inline-block m-3">
					<SubHeadCard
						//imgurl="https://requestreduce.org/images/black-and-white-money-clipart-17.png"
						text="Start Selling"
						style={{ background: "#6ce296" }}
					/>
				</div>
			</Link>
		</div>
	);
};
export default SubHead;
