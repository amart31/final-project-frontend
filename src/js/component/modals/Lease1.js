import React from "react";
import PropTypes from "prop-types";

import "../../../styles/Modal.css";

const Lease1 = props => {
	return (
		<div>
			<div
				className="modal-wrapper"
				style={{
					transform: props.show
						? "translateY(0vh)"
						: "translateY(-100vh)",
					opacity: props.show ? "1" : "0"
				}}>
				<div className="modal-header">
					<h3>Take the plounge</h3>
					<span className="close-modal-btn" onClick={props.close}>
						×
					</span>
				</div>
				<div className="modal-body">
					<p>{props.body}</p>
				</div>
				<div className="modal-footer">
					<button className="btn-cancel" onClick={props.close}>
						CLOSE
					</button>
					<button className="btn-continue">CONTINUE</button>
				</div>
			</div>
		</div>
	);
};

export default Lease1;

Lease1.propTypes = {
	show: PropTypes.bool,
	close: PropTypes.func,
	body: PropTypes.string
};
