import React from "react";
import "../../../styles/subhead.css";
import PropTypes from "prop-types";

const SubHeadCard = props => {
	return (
		<div className="subheadbutton mr-4">
			<img
				src={props.imgurl}
				alt="Card image cap"
				style={{ width: "100%" }}
			/>
			<div className="subhead-text">{props.text}</div>
		</div>
	);
};

export default SubHeadCard;

SubHeadCard.propTypes = {
	imgurl: PropTypes.string,
	text: PropTypes.string
};
