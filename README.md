# โปรเจค React ของฉัน

## สารบัญ
- [แนะนำ React.js](#แนะนำ-reactjs)
- [ทำไมถึงเลือกใช้ React.js](#ทำไมถึงเลือกใช้-reactjs)
- [เริ่มต้นใช้งาน](#เริ่มต้นใช้งาน)
  - [โคลนโปรเจค](#โคลนโปรเจค)
  - [ติดตั้ง Node Modules](#ติดตั้ง-node-modules)
  - [รันแอปพลิเคชัน](#รันแอปพลิเคชัน)
- [โครงสร้างโฟลเดอร์](#โครงสร้างโฟลเดอร์)
- [แนวคิดสำคัญของ React](#แนวคิดสำคัญของ-react)
  - [Component](#component)
  - [Props และ State](#props-และ-state)
  - [Hooks](#hooks)
- [แหล่งข้อมูลเพิ่มเติม](#แหล่งข้อมูลเพิ่มเติม)

---

## แนะนำ React.js
**React.js** เป็นไลบรารี JavaScript สำหรับสร้าง User Interface (UI) โดยเฉพาะอย่างยิ่งแอปพลิเคชันแบบ Single-Page ที่มีการอัปเดตข้อมูลแบบไดนามิก React ถูกพัฒนาขึ้นโดย Facebook และมีการใช้โครงสร้างแบบ Component-Based ที่ทำให้โค้ดสามารถนำมาใช้ซ้ำได้และดูแลรักษาง่าย

## ทำไมถึงเลือกใช้ React.js
- **Component ที่ใช้ซ้ำได้:** React ช่วยให้เราสร้าง UI Component ที่นำมาใช้ซ้ำได้ ลดการเขียนโค้ดซ้ำและทำให้โค้ดดูแลรักษาง่ายขึ้น
- **Virtual DOM:** React ใช้ Virtual DOM ในการอัปเดตเฉพาะส่วนที่เปลี่ยน ทำให้ทำงานได้อย่างรวดเร็วและมีประสิทธิภาพ
- **ชุมชนและ Ecosystem ที่แข็งแกร่ง:** React มีชุมชนผู้ใช้ขนาดใหญ่ที่มีการสนับสนุนอย่างดีและมีไลบรารีเสริมมากมาย
- **รองรับการขยายตัวและการใช้งานได้หลายรูปแบบ:** React เหมาะสำหรับการสร้างแอปพลิเคชันที่มีความซับซ้อนและขยายตัวได้ดี
- **เครื่องมือสำหรับนักพัฒนา:** React DevTools ช่วยให้การตรวจสอบและพัฒนาโค้ดง่ายขึ้น

---

## เริ่มต้นใช้งาน

### โคลนโปรเจค
1. เปิด terminal หรือ command prompt
2. โคลน repository ด้วยคำสั่ง:
   ```bash
   git clone https://github.com/username/repo-name.git
3. เข้าสู่โฟลเดอร์โปรเจค:
   ```bash
   cd repo-name
4. ตรวจสอบว่ามี Node.js และ npm ติดตั้งอยู่แล้ว จากนั้นรันคำสั่ง:
   ```bash
   npm install
5. เริ่มการทำงานของแอปพลิเคชันด้วยคำสั่ง:
   ```bash
   npm start

### ติดตั้ง Node Modules
1. ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง [Node.js](https://nodejs.org/) และ [npm](https://www.npmjs.com/) แล้ว หากยังไม่ได้ติดตั้ง สามารถดาวน์โหลดและติดตั้งได้ตามลิงก์
2. ภายในโฟลเดอร์โปรเจคของคุณ ให้ใช้คำสั่งต่อไปนี้ใน terminal เพื่อดาวน์โหลด dependencies ที่จำเป็น:
   ```bash
   npm install

### โครงสร้างโฟลเดอร์

1. /src: โฟลเดอร์หลักที่เก็บซอร์สโค้ดทั้งหมด
2. components/: เก็บ Component ย่อยที่นำกลับมาใช้ใหม่ได้ เช่น ปุ่ม หรือฟอร์ม
3. pages/: โฟลเดอร์ที่เก็บแต่ละหน้า (page) ที่เป็นมุมมอง (view) หลัก
4. App.js: ไฟล์หลักของแอปที่ประกอบด้วยโครงสร้างและการกำหนดเส้นทาง (routing)
5. index.js: จุดเริ่มต้นในการเรนเดอร์แอปไปยังหน้า HTML

## แนวคิดสำคัญของ React

### Component
**Component** เป็นโครงสร้างพื้นฐานของ React ที่ช่วยให้เราสามารถแบ่ง UI ออกเป็นส่วนย่อย ๆ ที่นำกลับมาใช้ใหม่ได้ ทำให้การจัดการโค้ดและการดูแลรักษาง่ายขึ้น ซึ่ง Component สามารถแบ่งได้เป็นสองประเภท:
- **Functional Component**: Component ที่เขียนโดยใช้ฟังก์ชัน และนิยมใช้คู่กับ Hooks
- **Class Component**: Component ที่เขียนโดยใช้คลาส ซึ่งสามารถใช้ state และ lifecycle methods ได้ (แม้ว่าจะใช้งานน้อยลงในปัจจุบัน)

### Props และ State
- **Props**: เป็นข้อมูลหรือค่าที่ส่งจาก Component หนึ่งไปยัง Component ย่อย โดยข้อมูลใน Props นั้นไม่สามารถเปลี่ยนแปลงได้ใน Component ย่อย
- **State**: ใช้เก็บสถานะข้อมูลภายใน Component และสามารถเปลี่ยนแปลงได้ เมื่อมีการเปลี่ยนแปลง State จะทำให้ Component นั้นทำการเรนเดอร์ใหม่

### Hooks
Hooks เป็นฟีเจอร์ที่ให้ใช้ state และ lifecycle methods ได้ใน Component แบบฟังก์ชัน โดยที่นิยมใช้กันมาก ได้แก่:
- **useState**: ใช้เพื่อกำหนดและจัดการ state ใน Component
- **useEffect**: ใช้สำหรับจัดการ side effects เช่น การดึงข้อมูล การอัปเดตข้อมูลเมื่อมีการเปลี่ยนแปลง state หรือ props เป็นต้น
- **useContext**: ใช้ร่วมกับ Context API เพื่อแชร์ข้อมูลระหว่าง Component หลายตัวโดยไม่ต้องส่งผ่าน props

---

## แหล่งข้อมูลเพิ่มเติม

สามารถศึกษาเพิ่มเติมเกี่ยวกับ React ได้จากลิงก์เหล่านี้:
- [React Documentation (เอกสารทางการของ React)](https://reactjs.org/docs/getting-started.html): คู่มืออย่างเป็นทางการของ React ที่มีทั้งวิธีเริ่มต้น แนวคิดหลัก และคำอธิบายแบบละเอียด
- [Create React App](https://create-react-app.dev/): เครื่องมือสำหรับสร้างโปรเจค React เริ่มต้นได้อย่างรวดเร็ว
- [React Community (ชุมชน React)](https://reactjs.org/community/support.html): แหล่งข้อมูลและการสนับสนุนจากชุมชน React เช่น ฟอรัมและแหล่งข้อมูลอื่น ๆ 

---

