import React from "react";

let imgUrl =
	"https://images.pexels.com/photos/1345082/pexels-photo-1345082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const jumbostyle = {
	backgroundImage: "url(" + imgUrl + ")",
	backgroundSize: "cover",
	color: "#4a82db",
	height: "500px"
};

const Jumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid" style={jumbostyle}>
			<div className="container">
				<h1 className="display-4">Welcome to ReactCloset</h1>
				<p className="lead">
					This is a modified jumbotron designed to inspire
				</p>
				<button type="button" className="btn btn-success">
					Shop
				</button>
			</div>
		</div>
	);
};

export default Jumbotron;
