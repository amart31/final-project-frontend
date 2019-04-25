import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

import "../../styles/home.css";

const imgUrl =
	"https://cdn.pixabay.com/photo/2015/11/07/11/46/fashion-1031469_960_720.jpg";
const style = {
	backgroundImage: "url(" + imgUrl + ")",
	color: "#4a82db",
	position: "relative"
};

const titleStyle = {
	position: "absolute",
	letterSpacing: "4px",
	left: "0",
	right: "0",
	top: "75%"
};

const headingStyle = {
	fontWeight: "300",
	fontSize: "32px",
	color: "#4a4a4a"
};

const pStyle = {
	fontSize: "16px",
	lineHeight: "150%",
	color: "#4a4a4a"
};

const IMGStyle = {
	height: "150px",
	borderRadius: "50%"
};

export class About extends React.Component {
	render() {
		return (
			<div className="text-center mt-3">
				<Jumbotron style={style} fluid={true}>
					<h1 style={titleStyle}>About React Closet</h1>
					<hr className="my-2" />
				</Jumbotron>
				<h2 style={headingStyle}>The luxury closet reimagined</h2>
				<p className="pt-3" style={pStyle}>
					{" "}
					React closet aims to bring about luxury clothing to the 21st
					century. Created with the sole purpose of making looking
					good not a full time hustle
				</p>
				<h2 style={headingStyle}> Creators</h2>
				<Row>
					<Col>
						<img
							src="https://avatars3.githubusercontent.com/u/46979797?s=460&v=4"
							style={IMGStyle}
						/>
						<div style={pStyle} className="pt-2">
							Andy
						</div>
					</Col>
					<Col>
						<img
							src="https://avatars3.githubusercontent.com/u/46979797?s=460&v=4"
							style={IMGStyle}
						/>
						<div style={pStyle} className="pt-2">
							Angelo
						</div>
					</Col>
				</Row>
				<Jumbotron fluid={true}>
					<h1 className="display-3">Technologies Used</h1>
					<p className="lead">
						This is a simple hero unit, a simple Jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>
					<hr className="my-2" />
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Bootstrap</li>
						<li>React.JS</li>
						<li>PHP</li>
						<li>Wordpress</li>
						<li>Webpack</li>
						<li>Git</li>
					</ul>
				</Jumbotron>
			</div>
		);
	}
}
