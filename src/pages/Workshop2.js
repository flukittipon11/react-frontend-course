// นำเข้า React และ hook ที่จำเป็น
import React, { useState, useEffect } from "react";

// นำเข้าฟังก์ชัน API ที่ใช้จัดการสินค้าต่าง ๆ
import { fetchProducts, addProduct, deleteProduct, updateProduct } from "../api";

// นำเข้าไฟล์ CSS สำหรับหน้า Workshop2
import "./Workshop2.css";

// นำเข้า component ที่ใช้ปรับแต่ง Input และแสดงโหลดเดอร์
import InputCustom from "../components/InputCustom";
import LoaderOverlay from "../components/LoaderOverlay";

const Workshop2 = () => {
	// สร้าง state สำหรับจัดการโหมดแก้ไขและไอดีของสินค้าที่กำลังแก้ไข
	const [editMode, setEditMode] = useState(false);
	const [editingProductId, setEditingProductId] = useState(null);

	// สร้าง state สำหรับแสดงโหลดเดอร์
	const [loading, setLoading] = useState(false);
	
	// สร้าง state สำหรับเก็บข้อมูลสินค้า

	// สร้าง state สำหรับเก็บข้อมูลสินค้าใหม่ที่กรอกในฟอร์ม

	// ฟังก์ชัน useEffect เพื่อโหลดรายการสินค้าครั้งแรก

	// ฟังก์ชันจัดการเมื่อมีการเปลี่ยนแปลงข้อมูลในฟอร์ม

	// ฟังก์ชันเพิ่มสินค้าใหม่

	// ฟังก์ชันเปิดโหมดแก้ไขข้อมูลสินค้า

	// ฟังก์ชันอัปเดตข้อมูลสินค้า

	// ฟังก์ชันลบสินค้า

	return (
		<div style={{ overflow: "scroll" }}>
			<LoaderOverlay loading={loading} /> {/* แสดงโหลดเดอร์เมื่อ loading เป็น true */}
			<h1>Workshop 2 - Product Management</h1>
			{/* ส่วนเพิ่มสินค้าใหม่หรือแก้ไข */}
			{/* ส่วนแสดงรายการสินค้า */}
			<h2>รายการสินค้า</h2>
			<div className="product-list">{/* html ในการแสดงผลรายการสินค้า */}</div>
		</div>
	);
};

export default Workshop2;
