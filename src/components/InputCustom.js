import React from "react";
import "./InputCustom.css";

const InputCustom = ({ label, placeholder, type, name, className = "input", value, onChange }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", width: "100%", gap: "5px" }}>
			<span style={{ margin: 0 }}>{label}</span>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				className={className}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputCustom;
