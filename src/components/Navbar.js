// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<div className="container-logo-inet">
					<img className="logo-inet" src="/images/inetlogo.png" alt="Company logo" width="130" />
				</div>

				<li>
					<NavLink to="/workshop1" className={({ isActive }) => (isActive ? "active-link" : "")}>
						Workshop 1
					</NavLink>
				</li>
				<li>
					<NavLink to="/workshop2" className={({ isActive }) => (isActive ? "active-link" : "")}>
						Workshop 2
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
