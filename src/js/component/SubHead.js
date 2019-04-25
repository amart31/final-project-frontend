import React from "react";
import SubHeadCard from "./functional/SubHeadCard";
import { Link } from "react-router-dom";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3">
			<Link to="/contact">
				<div className="d-inline-block m-3">
					<SubHeadCard
						style={{
							border: "1px solid #4a82db",
							color: "#4a82db"
						}}
						text="Contact Us"
					/>
				</div>
			</Link>
			<Link to="/rent">
				<div className="d-inline-block m-3">
					<SubHeadCard
						style={{
							border: "1px solid #4a82db",
							color: "#4a82db"
						}}
						text="Shop the feed"
					/>
				</div>
			</Link>
			<Link to="/login">
				<div className="d-inline-block m-3">
					<SubHeadCard
						text="Start Selling"
						style={{
							border: "1px solid #4a82db",
							color: "#4a82db"
						}}
					/>
				</div>
			</Link>
			<Link to="/insurance">
				<div className="d-inline-block m-3">
					<SubHeadCard
						text="Insurance Policy"
						style={{
							border: "1px solid #4a82db",
							color: "#4a82db"
						}}
					/>
				</div>
			</Link>
			<Link to="/aboutus">
				<div className="d-inline-block m-3">
					<SubHeadCard
						text="About Us"
						style={{
							border: "1px solid #4a82db",
							color: "#4a82db"
						}}
					/>
				</div>
			</Link>
		</div>
	);
};
export default SubHead;
