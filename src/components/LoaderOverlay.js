import React from "react";
import PropTypes from "prop-types";
import "./LoaderOverlay.css"; // ใส่ CSS แยกไว้ในไฟล์นี้

const LoaderOverlay = ({ loading }) => {
	return (
		<div>
			<div className={`loading-overlay ${loading ? "active" : ""}`}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: "10px",
					}}
				>
					<div className="loader"></div>
					กำลังโหลด
				</div>
			</div>
		</div>
	);
};

LoaderOverlay.propTypes = {
	loading: PropTypes.bool.isRequired,
};

export default LoaderOverlay;
