// src/components/Navbar.js
<<<<<<< HEAD
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
=======

// นำเข้า React และ NavLink จาก react-router-dom เพื่อใช้งานในการสร้าง Navigation Bar
import React from "react";
import { NavLink } from "react-router-dom";
// นำเข้าไฟล์ CSS สำหรับสไตล์ของ Navbar
import "./Navbar.css";

// สร้าง Functional Component ชื่อ Navbar
const Navbar = () => {
	return (
		// สร้างแท็ก nav สำหรับ Navigation Bar
		<nav className="navbar">
			<ul>
				{/* สร้าง div สำหรับโลโก้ของบริษัท */}
				<div className="container-logo-inet">
					{/* แสดงโลโก้ของบริษัท */}
					<img className="logo-inet" src="/images/inetlogo.png" alt="Company logo" width="130" />
				</div>

				{/* รายการลิงก์ใน Navigation Bar */}
				<li>
					{/* NavLink ใช้ในการสร้างลิงก์ที่เชื่อมต่อกับ router */}
>>>>>>> dev
					<NavLink to="/workshop1" className={({ isActive }) => (isActive ? "active-link" : "")}>
						Workshop 1
					</NavLink>
				</li>
				<li>
<<<<<<< HEAD
=======
					{/* NavLink สำหรับ Workshop 2 */}
>>>>>>> dev
					<NavLink to="/workshop2" className={({ isActive }) => (isActive ? "active-link" : "")}>
						Workshop 2
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

<<<<<<< HEAD
=======
// ส่งออก Component Navbar เพื่อใช้งานในไฟล์อื่นๆ
>>>>>>> dev
export default Navbar;
