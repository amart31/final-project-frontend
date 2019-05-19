import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";

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
	top: "80%"
};

const headingStyle = {
	fontWeight: "300",
	fontSize: "32px",
	color: "#4a82db",
	letterSpacing: "2px"
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

const techLogo = {
	height: "100px"
};

export class About extends React.Component {
	render() {
		return (
			<div className="text-center mt-3">
				<Jumbotron style={style} fluid={true}>
					<h1 className="display-3" style={titleStyle}>
						About React Closet
					</h1>
				</Jumbotron>
				<h2 style={headingStyle}>The luxury closet reimagined</h2>
				<p className="pt-3" style={pStyle}>
					{" "}
					We built this website with a whole lot of love. It all
					started as a passion for creating things. We were chilling
					one day and decided to take a plunge at coding our own
					business ideas because why not it couldnt be that hard.
					Thanks to{" "}
					<a href="https://www.4geeksacademy.co/">@4geekAcademy</a> me
					and my brother have been able to finally crush it and
					finally we built, from the ground up our very first business
					idea. React closet aims to bring about luxury clothing to
					the 21st century. Created with the sole purpose of making
					looking good not a full time hustle
				</p>
				<h2 style={headingStyle} className="mb-4">
					{" "}
					Creators
				</h2>
				<Row className="mb-5">
					<Col />
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
					<Col />
				</Row>
				<Jumbotron fluid={true} style={{ height: "575px" }}>
					<h1 className="display-3" style={{ color: "#4a82db" }}>
						Technologies Used
					</h1>
					<p className="lead">
						The technologies that we have learned have enabled us to
						bring about our dreams. The following is a list of the
						technologies and libraries that we mostly used for this
						project.
					</p>
					<hr className="my-2" />
					<Row>
						<Col>
							<img
								src="http://downloadicons.net/sites/default/files/html5-logo-icon-47404.png"
								style={techLogo}
							/>
							<div>HTML</div>
						</Col>
						<Col>
							<img
								src="https://cdn.freebiesupply.com/logos/large/2x/css-3-logo-png-transparent.png"
								style={techLogo}
							/>
							<div>CSS</div>
						</Col>
						<Col>
							<img
								src="http://www.logospng.com/images/68/bootstrap-logo-system-4-68467.png"
								style={techLogo}
							/>
							<div>Bootstrap</div>
						</Col>
						<Col>
							<img
								src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
								style={techLogo}
							/>
							<div>ReactJS</div>
						</Col>
					</Row>
					<Row className="mt-5">
						<Col>
							<img
								src="https://cdn.freebiesupply.com/logos/large/2x/php-logo-png-transparent.png"
								style={techLogo}
							/>
							<div>PHP</div>
						</Col>
						<Col>
							<img
								src="https://www.momento360.com/wp-content/uploads/2018/04/wordpress-logo-transparent-background-10.png"
								style={techLogo}
							/>
							<div>Wordpress</div>
						</Col>
						<Col>
							<img
								src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png"
								style={techLogo}
							/>
							<div>Webpack</div>
						</Col>
						<Col>
							<img
								src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
								style={techLogo}
							/>
							<div>Git</div>
						</Col>
					</Row>
				</Jumbotron>
			</div>
		);
	}
}
