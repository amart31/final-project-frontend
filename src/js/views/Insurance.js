import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Insurance = () => {
	return (
		<div>
			<Jumbotron fluid style={{ background: "rgb(169, 182, 204)" }}>
				<Container fluid>
					<h1 className="display-3">React Closet Insurance</h1>
					<i className="fas fa-user-lock fa-4x" />
				</Container>
			</Jumbotron>
			<Container>
				<h2>
					You are protected every time you make a purchase on React
					Closet.
				</h2>
				<p>
					We will give you a full refund if your item never ships or
					does not match the listing description. Otherwise,{" "}
					<b>all sales are final</b>
				</p>
				<hr className="my-2" />
				<h2>Refund Policy</h2>
				<p>
					When you make a purchase on React Closet, we do not release
					payment to the leaser until you tell us you have received
					your order as described. You have 3 days after delivery to
					inform us if the item has been misrepresented by reporting
					the problem to our support with supporting photos. If we
					verify your claim, we will send you a label to return the
					order to the seller and refund your payment. All returns
					must be shipped back within 5 days of approval to be
					eligible for a refund.
				</p>
				<hr className="my-2" />
				<h2>What is covered</h2>
				<p>
					If any of the following pertain to your order, please report
					the problem to our team immediately:
				</p>
				<ul>
					<li>Undisclosed damage</li>
					<li>Incorrect or missing item</li>
					<li>Item not as described</li>
					<li>Item is not authentic</li>
				</ul>
				<p>
					If no claim is made within 3 days of delivery, payment will
					be automatically released to the seller. Once payment has
					been released, all sales are final and no refunds will be
					provided.
				</p>
			</Container>
		</div>
	);
};

export default Insurance;
