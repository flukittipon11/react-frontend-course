function MultiplicationTable(number) {
	let lengthNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<div>
			{lengthNumber.map((item, index) => (
				<div key={index}>
					{number} x {item} = {number * item}
				</div>
			))}
		</div>
	);
}

function SortNumber() {
	let dataArray = [22, 19, 2, 89, 77, 39, 59];

	// เรียงลำดับอาร์เรย์
	dataArray.sort((a, b) => a - b);

	return (
		<div>
			{dataArray.join(" ")} {/* ใช้ช่องว่างเป็นตัวแบ่ง */}
		</div>
	);
}

function EvenOdd(n) {
	let r = "";
	if (n % 2 === 0) {
		r = "เลข " + n + " เป็นเลขคู่";
	} else {
		r = "เลข " + n + " เป็นเลขคี่";
	}
	return r;
}

function CalculateGrade(score) {
	if (score >= 80 && score <= 100) {
		return "เกรดที่ได้ : 4.0";
	} else if (score >= 75 && score < 80) {
		return "เกรดที่ได้ : 3.5";
	} else if (score >= 70 && score < 75) {
		return "เกรดที่ได้ : 3.0";
	} else if (score >= 65 && score < 70) {
		return "เกรดที่ได้ : 2.5";
	} else if (score >= 60 && score < 65) {
		return "เกรดที่ได้ : 2.0";
	} else if (score >= 55 && score < 60) {
		return "เกรดที่ได้ : 1.5";
	} else if (score >= 50 && score < 55) {
		return "เกรดที่ได้ : 1.0";
	} else if (score >= 0 && score < 50) {
		return "เกรดที่ได้ : 0.0";
	} else {
		return "คะแนนไม่ถูกต้อง";
	}
}

const users = [
	{
		id: "1",
		firstName: "สมชาย",
		lastName: "จันทร์ดี",
		age: 30,
		gender: "ชาย",
		phone: "012-345-6789",
	},
	{
		id: "2",
		firstName: "สมหญิง",
		lastName: "ทองดี",
		age: 25,
		gender: "หญิง",
		phone: "098-765-4321",
	},
	{
		id: "3",
		firstName: "พิชชา",
		lastName: "บุญชู",
		age: 28,
		gender: "หญิง",
		phone: "091-234-5678",
	},
	{
		id: "4",
		firstName: "อภิวัฒน์",
		lastName: "ดีสุด",
		age: 35,
		gender: "ชาย",
		phone: "087-654-3210",
	},
];

function Users() {
	const data = users.map((item, index) => {
		return (
			<div key={index}>
				<div>
					ชื่อ: {item.firstName} สกุล {item.lastName} อายุ: {item.age} เบอร์โทรศัพท์: {item.phone}
				</div>
			</div>
		);
	});
	return data;
}
