const users = [
    {
      id: "1",
      firstName: "สมชาย",
      lastName: "จันทร์ดี",
      age: 30,
      gender: "ชาย",
      phone: "012-345-6789"
    },
    {
      id: "2",
      firstName: "สมหญิง",
      lastName: "ทองดี",
      age: 25,
      gender: "หญิง",
      phone: "098-765-4321"
    },
    {
      id: "3",
      firstName: "พิชชา",
      lastName: "บุญชู",
      age: 28,
      gender: "หญิง",
      phone: "091-234-5678"
    },
    {
      id: "4",
      firstName: "อภิวัฒน์",
      lastName: "ดีสุด",
      age: 35,
      gender: "ชาย",
      phone: "087-654-3210"
    }
  ];

function Users() {
    const data = users.map((item, index) => {
        return <div key={index}>
            <div>ชื่อ: {item.firstName} สกุล {item.lastName} อายุ: {item.age} เบอร์โทรศัพท์: {item.phone}</div>
        </div>
    })
    return data
}

export default Users
