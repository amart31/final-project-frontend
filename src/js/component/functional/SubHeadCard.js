import React from "react";
import "../../../styles/subhead.css";
import PropTypes from "prop-types";

class SubHeadCard extends React.Component {
	constructor(props) {
		super(props);
	}
	_onMouseMove = () => {
		const width = this.refs.subheadbutton.clientWidth;
		const height = this.refs.subheadbutton.clientHeight;
		console.log(width, height);
	};
	render() {
		return (
			<div
				className="subheadbutton mr-4"
				onMouseMove={this._onMouseMove}
				ref="subheadbutton">
				<img
					src={this.props.imgurl}
					alt="Card image cap"
					style={{ width: "100%" }}
				/>
				<div className="subhead-text">{this.props.text}</div>
			</div>
		);
	}
}

export default SubHeadCard;

SubHeadCard.propTypes = {
	imgurl: PropTypes.string,
	text: PropTypes.string
};
