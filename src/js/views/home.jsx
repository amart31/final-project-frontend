import React from "react";
import Jumbotron from "../component/Jumbotron";
import SubHead from "../component/SubHead";
import FeaturedList from "../component/FeaturedList";
import HowItWorks from "../component/HowItWorks";

//footer import
import { Footer } from "../component/footer.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="footerHolder">
				<div className="body mb-5">
					<Jumbotron />
					<div className="subheading">
						<SubHead />
					</div>
					<div className="featured-products">
						<h2 className="section-heading">Featured Items:</h2>
						<FeaturedList />
					</div>
					<div className="how-itworks">
						<h2 className="section-heading mt-4">How it works:</h2>
						<div className="how-itworks text-center mb-4">
							<HowItWorks />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
