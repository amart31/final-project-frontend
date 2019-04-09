import React from "react";
import SubHeadCard from "./functional/SubHeadCard";
import { Link } from "react-router-dom";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3">
			<Link to="/contact">
				<div className="d-inline-block m-3">
					<SubHeadCard
						imgurl="https://www.blakleysflooring.com/wp-content/uploads/2016/03/Placeholder.png"
						text="Contact Us"
					/>
				</div>
			</Link>
			<Link to="/products">
				<div className="d-inline-block m-3">
					<SubHeadCard
						imgurl="https://designshack.net/wp-content/uploads/placeholder-image.png"
						text="Shop the feed"
					/>
				</div>
			</Link>
			<Link to="/login">
				<div className="d-inline-block m-3">
					<SubHeadCard
						imgurl="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
						text="Start Selling"
					/>
				</div>
			</Link>
		</div>
	);
};
export default SubHead;
