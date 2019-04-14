import React from "react";

//import styles sheet
import "../../styles/faqs.css";

const FAQs = () => {
	return (
		<div className="mt-5 pt-2">
			<div className="question">
				<h4 className="marker">Q</h4>
				<h4 className="lead">
					Lorem Ipsum is simply dummy text of the printing and
					typesetting industry. Lorem Ipsum has been the industry's.
				</h4>
			</div>
			<div className="answer">
				<h4 className="marker">A.</h4>
				<p className="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
		</div>
	);
};

export default FAQs;
