import React from "react";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-5">
				<h1>Hello Rigo!</h1>
				<p>Hello</p>
				<a href="#" className="btn btn-success">
					If you see this green button, bootstrap is working
				</a>
			</div>
		);
	}
}
