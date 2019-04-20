import React from "react";

import { Context } from "../store/appContext.jsx";
import PropTypes from "prop-types";

const UserJumbo = props => {
	return (
		<div className="mt-2 jumbotron jumbotron-fluid">
			<div className="container">
				<div className="d-flex justify-content-center">
					<img
						src="https://picsum.photos/150/150/?random"
						className="mr-3"
						alt="..."
						style={{ borderRadius: "50%" }}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<div className="d-flex justify-content-center flex-column">
						<h1 className="lead">
							{"Welcome " + props.user_nicename}
						</h1>
						<p> {"Email: " + props.user_email} </p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserJumbo;

UserJumbo.propTypes = {
	user_nicename: PropTypes.string,
	user_email: PropTypes.string
};

UserJumbo.defaultProps = {
	user_nicename: "Placeholder",
	user_email: "Placeholder"
};
