import React from "react";
import SubHeadCard from "./functional/SubHeadCard";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3">
			<div className="d-inline-block m-3">
				<SubHeadCard
					imgurl="https://www.blakleysflooring.com/wp-content/uploads/2016/03/Placeholder.png"
					text="Buyer Protection"
				/>
			</div>
			<div className="d-inline-block m-3">
				<SubHeadCard
					imgurl="https://designshack.net/wp-content/uploads/placeholder-image.png"
					text="Shop the feed"
				/>
			</div>
			<div className="d-inline-block m-3">
				<SubHeadCard
					imgurl="http://www.ieeeaustsb.org/files/2017/05/placeholder-female-square.png"
					text="Lowest Fees"
				/>
			</div>
		</div>
	);
};
export default SubHead;
