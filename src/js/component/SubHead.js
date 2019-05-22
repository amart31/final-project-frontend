import React from "react";
import { Link } from "react-router-dom";

const SubHead = props => {
	return (
		<div className="subhead-container mb-3 mt-3">
			<Link to="/contact">
				<div className="d-inline-block subheadbutton mr-4">
					<div className="subhead-text">Contact Us</div>
				</div>
			</Link>
			<Link to="/rent">
				<div className="d-inline-block subheadbutton mr-4">
					<div className="subhead-text">Shop the feed</div>
				</div>
			</Link>
			<Link to="/login">
				<div className="d-inline-block subheadbutton mr-4">
					<div className="subhead-text">Start Selling</div>
				</div>
			</Link>
			<Link to="/insurance">
				<div className="d-inline-block subheadbutton mr-4">
					<div className="subhead-text">Insurance Policy</div>
				</div>
			</Link>
			<Link to="/aboutus">
				<div className="d-inline-block subheadbutton">
					<div className="subhead-text">About Us</div>
				</div>
			</Link>
		</div>
	);
};
export default SubHead;
