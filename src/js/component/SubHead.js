import React from "react";
import SubHeadCard from "./functional/SubHeadCard";
import { Link } from "react-router-dom";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3">
			<Link to="/contact">
				<div className="d-inline-block m-3">
					<SubHeadCard
						imgurl="https://lh3.googleusercontent.com/proxy/VqgxA_66FhsaWsm0g6dLUU_CJkja3wsqey3ZN-ejH1BdTikJEYhVRF7Sy8dOMjzNkQqMcw1HxPFw1wyNJT_E1Apfr1D56XhsJZtMC1y1mGC2=w1392-h1313-p-rw"
						text="Contact Us"
					/>
				</div>
			</Link>
			<Link to="/rent">
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
