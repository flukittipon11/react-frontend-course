import React, { useState } from "react";
import "./Workshop1.css"; // นำเข้าไฟล์ CSS สำหรับการจัดรูปแบบ
import CourseDescription from "../components/CourseDescription";

// ฟังก์ชันแสดงตารางสูตรคูณ
function MultiplicationTable({ number }) {
	const lengthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // อาร์เรย์ของตัวเลขสำหรับการคูณ
	return (
		<div>
			{/* ใช้ map เพื่อสร้างบรรทัดของตารางสูตรคูณ */}
			{lengthNumber.map((item, index) => (
				<div key={index}>
					{number} x {item} = {number * item} {/* แสดงผลการคูณ */}
				</div>
			))}
		</div>
	);
}

// ฟังก์ชันเรียงลำดับตัวเลขจากน้อยไปมาก
function SortNumber() {
	const dataArray = [22, 19, 2, 89, 77, 39, 59]; // อาร์เรย์ของตัวเลขที่ต้องการเรียงลำดับ
	dataArray.sort((a, b) => a - b); // เรียงลำดับตัวเลขจากน้อยไปมาก
	return <div>{dataArray.join(" ")}</div>; // แสดงผลตัวเลขที่เรียงแล้ว
}

// ฟังก์ชันเช็คว่าเป็นเลขคู่หรือเลขคี่
function EvenOdd({ number }) {
	const result = number % 2 === 0 ? `เลข ${number} เป็นเลขคู่` : `เลข ${number} เป็นเลขคี่`; // เช็คว่าหมายเลขเป็นเลขคู่หรือคี่
	return <div>{result}</div>; // แสดงผลการตรวจสอบ
}

// ฟังก์ชันคำนวณเกรดตามคะแนน
function CalculateGrade({ score }) {
	let grade; // ประกาศตัวแปรเกรด
	// ตรวจสอบคะแนนแล้วกำหนดเกรดตามช่วงคะแนนที่กำหนด
	if (score >= 80 && score <= 100) grade = "เกรดที่ได้ : 4.0";
	else if (score >= 75) grade = "เกรดที่ได้ : 3.5";
	else if (score >= 70) grade = "เกรดที่ได้ : 3.0";
	else if (score >= 65) grade = "เกรดที่ได้ : 2.5";
	else if (score >= 60) grade = "เกรดที่ได้ : 2.0";
	else if (score >= 55) grade = "เกรดที่ได้ : 1.5";
	else if (score >= 50) grade = "เกรดที่ได้ : 1.0";
	else if (score >= 0) grade = "เกรดที่ได้ : 0.0";
	else grade = "คะแนนไม่ถูกต้อง"; // ตรวจสอบคะแนนไม่ถูกต้อง

	return <div>{grade}</div>; // แสดงผลเกรด
}

// ฟังก์ชันแสดงข้อมูลผู้ใช้
function Users() {
	const users = [
		// อาร์เรย์ของข้อมูลผู้ใช้
		{ id: "1", firstName: "สมชาย", lastName: "จันทร์ดี", age: 30, gender: "ชาย", phone: "012-345-6789" },
		{ id: "2", firstName: "สมหญิง", lastName: "ทองดี", age: 25, gender: "หญิง", phone: "098-765-4321" },
		{ id: "3", firstName: "พิชชา", lastName: "บุญชู", age: 28, gender: "หญิง", phone: "091-234-5678" },
		{ id: "4", firstName: "อภิวัฒน์", lastName: "ดีสุด", age: 35, gender: "ชาย", phone: "087-654-3210" },
	];

	return (
		<div>
			{/* ใช้ map เพื่อแสดงข้อมูลผู้ใช้แต่ละคน */}
			{users.map((user, index) => (
				<div key={index}>
					ชื่อ: {user.firstName} สกุล {user.lastName} อายุ: {user.age} เบอร์โทรศัพท์: {user.phone}
				</div>
			))}
		</div>
	);
}

function Workshop1() {
	const [number, setNumber] = useState(1); // สถานะสำหรับเก็บค่าตัวเลขที่ผู้ใช้กรอก
	const [score, setScore] = useState(""); // สถานะสำหรับเก็บค่าคะแนนที่ผู้ใช้กรอก

	return (
		<div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
			<CourseDescription />
			<h1>Workshop 1 - Basic JavaScript</h1> {/* หัวข้อหลักของ Workshop */}
			<div style={{ padding: "15px" }}>
				{/* กำหนด layout ของ Workshop */}
				<div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "15px" }}>
					<div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
						<div className="workshop-container">
							<span>WorkShop 1</span> {/* ชื่อ Workshop 1 */}
							<div className="workshop-inner-container">
								<div className="flex-column">
									<span>กรอกตัวเลข</span> {/* คำแนะนำให้กรอกตัวเลข */}
									<input
										className="input"
										type="number"
										value={number}
										onChange={(e) => setNumber(e.target.value)} // รับค่าที่ผู้ใช้กรอกและอัพเดตค่าใหม่
										placeholder="ใส่ตัวเลข" // ข้อความตัวอย่างในช่องกรอก
									/>
								</div>
								{/* แสดงตารางสูตรคูณหากมีการกรอกตัวเลข */}
								{number && <MultiplicationTable number={parseInt(number)} />}
							</div>
						</div>
						<div className="flex-column-container">
							{/* Workshop 2 - เรียงลำดับอาร์เรย์ */}
							<div className="content-box">
								<div className="flex-column">
									<span>WorkShop 2</span>
									<div className="inner-box">
										<div className="flex-column">
											<span>เรียงลำดับอาร์เรย์</span>
											<div className="styled-box">
												<SortNumber /> {/* แสดงผลตัวเลขที่เรียงแล้ว */}
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* Workshop 3 - ตรวจสอบเลขคู่หรือคี่ */}
							<div className="content-box">
								<div className="flex-column">
									<span>WorkShop 3</span>
									<div className="inner-box">
										<div className="flex-column">
											<span>ตรวจสอบเลขคู่หรือคี่</span>
											<div className="styled-box">
												{/* แสดงผลการตรวจสอบเลขคู่หรือคี่ */}
												{number ? <EvenOdd number={parseInt(number)} /> : "กรุณากรอกข้อมูล"}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Workshop 4 - คำนวณเกรด */}
						<div className="workshop-container">
							<div className="flex-column">
								<span>WorkShop 4</span>
								<div className="inner-box">
									<div className="flex-column">
										<span>คำนวณเกรดเฉลี่ย</span>
										<input
											className="input"
											type="number"
											value={score}
											onChange={(e) => setScore(e.target.value)} // รับค่าคะแนนจากผู้ใช้
											placeholder="ใส่คะแนน" // ข้อความตัวอย่างในช่องกรอกคะแนน
										/>
										<div className="output-box">
											{/* แสดงผลเกรดที่คำนวณจากคะแนน */}
											{score ? <CalculateGrade score={parseInt(score)} /> : "กรุณากรอกคะแนน"}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Workshop 5 - รายชื่อผู้ใช้ */}
					<div className="workshop-container-workshop-4">
						<div className="flex-column">
							<span>WorkShop 5</span>
							<div className="inner-box">
								<div className="flex-column">
									<span>แสดงข้อมูลรายชื่อ</span>
									<Users /> {/* แสดงข้อมูลรายชื่อ */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Workshop1; // ส่งออกฟังก์ชัน Workshop1
