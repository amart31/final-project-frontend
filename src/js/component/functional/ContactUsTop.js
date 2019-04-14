import React from "react";
import { Link } from "react-router-dom";

const ContactUsTop = () => {
	return (
		<div className="mt-5 pt-5 ml-5">
			<h2>Contact Info</h2>
			<p style={{ color: "#4a82db" }}>
				IF YOU HAVE ANY QUESTIONS FEEL FREE TO SEND US AN EMAIL BELOW.
			</p>
			<p>
				Check our <Link to="/faqs">FAQs </Link>
				for some of the most common questions. If you still have any
				unanswered questions feel free to send us a message.
			</p>
			<p className="font-weight-bold mb-0">React Closet</p>
			<p className="mb-0 mt-0">Miami, FL, USA</p>
			<p className="mt-0">E-mail: support@reactcloset.com</p>
		</div>
	);
};

export default ContactUsTop;
