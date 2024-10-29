<<<<<<< HEAD
// src/App.js
import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Workshop1 from "./pages/Workshop1";
import Workshop2 from "./pages/Workshop2";

const App = () => {
	return (
		<Router>
			<div className="app-container">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/workshop1" element={<Workshop1 />} />
						<Route path="/workshop2" element={<Workshop2 />} />
=======
import React from "react";
import "./styles/App.css";
// นำเข้าฟังก์ชันที่จำเป็นจาก react-router-dom เพื่อจัดการการนำทาง (routing)
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// นำเข้า component ที่กำหนดเองสำหรับแอป
import Navbar from "./components/Navbar"; // Component สำหรับแถบนำทาง (Navbar) ของแอป
import Workshop1 from "./pages/Workshop1"; // Component หน้า Workshop 1
import Workshop2 from "./pages/Workshop2"; // Component หน้า Workshop 2

const App = () => {
	return (
		// ตั้งค่า router สำหรับการนำทางภายในแอป
		<Router>
			<div className="app-container">
				{/* แสดง Navbar ไว้ด้านบนของแอป */}
				<Navbar />

				{/* ส่วนแสดงเนื้อหาหลักของแอป */}
				<div className="content">
					{/* กำหนดเส้นทางไปยังหน้าเพจต่าง ๆ */}
					<Routes>
						<Route path="/" element={<Navigate to="/workshop1" replace />} />
						{/* เมื่อเข้าหน้าแรกให้ redirect ไปที่ Workshop1 */}
						<Route path="/workshop1" element={<Workshop1 />} /> {/* เส้นทางไปยังหน้า Workshop1 */}
						<Route path="/workshop2" element={<Workshop2 />} /> {/* เส้นทางไปยังหน้า Workshop2 */}
>>>>>>> dev
					</Routes>
				</div>
			</div>
		</Router>
	);
};

<<<<<<< HEAD
=======
// ส่งออก App component เป็นค่า default
>>>>>>> dev
export default App;
