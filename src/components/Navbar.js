// src/components/Navbar.js

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
					<NavLink to="/workshop1" className={({ isActive }) => (isActive ? "active-link" : "")}>
						Workshop 1
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

// ส่งออก Component Navbar เพื่อใช้งานในไฟล์อื่นๆ
export default Navbar;
