import React from "react";
import "../../../styles/subhead.css";
import PropTypes from "prop-types";

class SubHeadCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="subheadbutton mr-4" style={this.props.style}>
				<img src={this.props.imgurl} style={{ width: "100%" }} />
				<div className="subhead-text">{this.props.text}</div>
			</div>
		);
	}
}

export default SubHeadCard;

SubHeadCard.propTypes = {
	imgurl: PropTypes.string,
	text: PropTypes.string,
	style: PropTypes.object
};
