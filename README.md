# โปรเจค React Javascript

## สารบัญ

-   [แนะนำ React.js](#แนะนำ-reactjs)
-   [ทำไมถึงเลือกใช้ React.js](#ทำไมถึงเลือกใช้-reactjs)
-   [เริ่มต้นใช้งาน](#เริ่มต้นใช้งาน)
    -   [โคลนโปรเจค](#โคลนโปรเจค)
    -   [ติดตั้ง Node Modules](#ติดตั้ง-node-modules)
    -   [รันแอปพลิเคชัน](#รันแอปพลิเคชัน)
-   [โครงสร้างโฟลเดอร์](#โครงสร้างโฟลเดอร์)
-   [แนวคิดสำคัญของ React](#แนวคิดสำคัญของ-react)
    -   [Component](#component)
    -   [Props และ State](#props-และ-state)
    -   [Hooks](#hooks)
-   [แหล่งข้อมูลเพิ่มเติม](#แหล่งข้อมูลเพิ่มเติม)
-   [แบบทดสอบ:เริ่มต้นการใช้งาน React javascript](#แบบทดสอบที่สอง)

---

## แนะนำ React.js

**React.js** เป็นไลบรารี JavaScript สำหรับสร้าง User Interface (UI) โดยเฉพาะอย่างยิ่งแอปพลิเคชันแบบ Single-Page ที่มีการอัปเดตข้อมูลแบบไดนามิก React ถูกพัฒนาขึ้นโดย Facebook และมีการใช้โครงสร้างแบบ Component-Based ที่ทำให้โค้ดสามารถนำมาใช้ซ้ำได้และดูแลรักษาง่าย

## ทำไมถึงเลือกใช้ React.js

-   **Component ที่ใช้ซ้ำได้:** React ช่วยให้เราสร้าง UI Component ที่นำมาใช้ซ้ำได้ ลดการเขียนโค้ดซ้ำและทำให้โค้ดดูแลรักษาง่ายขึ้น
-   **Virtual DOM:** React ใช้ Virtual DOM ในการอัปเดตเฉพาะส่วนที่เปลี่ยน ทำให้ทำงานได้อย่างรวดเร็วและมีประสิทธิภาพ
-   **ชุมชนและ Ecosystem ที่แข็งแกร่ง:** React มีชุมชนผู้ใช้ขนาดใหญ่ที่มีการสนับสนุนอย่างดีและมีไลบรารีเสริมมากมาย
-   **รองรับการขยายตัวและการใช้งานได้หลายรูปแบบ:** React เหมาะสำหรับการสร้างแอปพลิเคชันที่มีความซับซ้อนและขยายตัวได้ดี
-   **เครื่องมือสำหรับนักพัฒนา:** React DevTools ช่วยให้การตรวจสอบและพัฒนาโค้ดง่ายขึ้น

---

## เริ่มต้นใช้งาน

### โคลนโปรเจค

1. เปิด terminal หรือ command prompt
2. โคลน repository ด้วยคำสั่ง:
    ```bash
    git clone https://github.com/username/repo-name.git
    ```
3. เข้าสู่โฟลเดอร์โปรเจค:
    ```bash
    cd repo-name
    ```
4. ตรวจสอบว่ามี Node.js และ npm ติดตั้งอยู่แล้ว จากนั้นรันคำสั่ง:
    ```bash
    npm install
    ```
5. เริ่มการทำงานของแอปพลิเคชันด้วยคำสั่ง:
    ```bash
    npm start
    ```

### ติดตั้ง Node Modules

1. ตรวจสอบให้แน่ใจว่าคุณได้ติดตั้ง [Node.js](https://nodejs.org/) และ [npm](https://www.npmjs.com/) แล้ว หากยังไม่ได้ติดตั้ง สามารถดาวน์โหลดและติดตั้งได้ตามลิงก์
2. ภายในโฟลเดอร์โปรเจคของคุณ ให้ใช้คำสั่งต่อไปนี้ใน terminal เพื่อดาวน์โหลด dependencies ที่จำเป็น:
    ```bash
    npm install
    ```

### โครงสร้างโฟลเดอร์

1. /src: โฟลเดอร์หลักที่เก็บซอร์สโค้ดทั้งหมด
2. components/: เก็บ Component ย่อยที่นำกลับมาใช้ใหม่ได้ เช่น ปุ่ม หรือฟอร์ม
3. pages/: โฟลเดอร์ที่เก็บแต่ละหน้า (page) ที่เป็นมุมมอง (view) หลัก
4. App.js: ไฟล์หลักของแอปที่ประกอบด้วยโครงสร้างและการกำหนดเส้นทาง (routing)
5. index.js: จุดเริ่มต้นในการเรนเดอร์แอปไปยังหน้า HTML

## แนวคิดสำคัญของ React

### Component

**Component** เป็นโครงสร้างพื้นฐานของ React ที่ช่วยให้เราสามารถแบ่ง UI ออกเป็นส่วนย่อย ๆ ที่นำกลับมาใช้ใหม่ได้ ทำให้การจัดการโค้ดและการดูแลรักษาง่ายขึ้น ซึ่ง Component สามารถแบ่งได้เป็นสองประเภท:

-   **Functional Component**: Component ที่เขียนโดยใช้ฟังก์ชัน และนิยมใช้คู่กับ Hooks
-   **Class Component**: Component ที่เขียนโดยใช้คลาส ซึ่งสามารถใช้ state และ lifecycle methods ได้ (แม้ว่าจะใช้งานน้อยลงในปัจจุบัน)

### Props และ State

-   **Props**: เป็นข้อมูลหรือค่าที่ส่งจาก Component หนึ่งไปยัง Component ย่อย โดยข้อมูลใน Props นั้นไม่สามารถเปลี่ยนแปลงได้ใน Component ย่อย
-   **State**: ใช้เก็บสถานะข้อมูลภายใน Component และสามารถเปลี่ยนแปลงได้ เมื่อมีการเปลี่ยนแปลง State จะทำให้ Component นั้นทำการเรนเดอร์ใหม่

### Hooks

Hooks เป็นฟีเจอร์ที่ให้ใช้ state และ lifecycle methods ได้ใน Component แบบฟังก์ชัน โดยที่นิยมใช้กันมาก ได้แก่:

-   **useState**: ใช้เพื่อกำหนดและจัดการ state ใน Component
-   **useEffect**: ใช้สำหรับจัดการ side effects เช่น การดึงข้อมูล การอัปเดตข้อมูลเมื่อมีการเปลี่ยนแปลง state หรือ props เป็นต้น
-   **useContext**: ใช้ร่วมกับ Context API เพื่อแชร์ข้อมูลระหว่าง Component หลายตัวโดยไม่ต้องส่งผ่าน props

---

## แหล่งข้อมูลเพิ่มเติม

สามารถศึกษาเพิ่มเติมเกี่ยวกับ React ได้จากลิงก์เหล่านี้:

-   [React Documentation (เอกสารทางการของ React)](https://reactjs.org/docs/getting-started.html): คู่มืออย่างเป็นทางการของ React ที่มีทั้งวิธีเริ่มต้น แนวคิดหลัก และคำอธิบายแบบละเอียด
-   [Create React App](https://create-react-app.dev/): เครื่องมือสำหรับสร้างโปรเจค React เริ่มต้นได้อย่างรวดเร็ว
-   [React Community (ชุมชน React)](https://reactjs.org/community/support.html): แหล่งข้อมูลและการสนับสนุนจากชุมชน React เช่น ฟอรัมและแหล่งข้อมูลอื่น ๆ

---

## แบบทดสอบที่สอง

# Workshop 2: React.js

โปรเจคนี้เป็นตัวอย่างการสร้างเว็บแอปพลิเคชันที่เกี่ยวข้องกับการจัดการสินค้าบนหน้าเว็บ โดยมีฟังก์ชันการเพิ่ม แก้ไข และลบสินค้า พร้อมการดึงข้อมูลผ่าน API โดยใช้ React.js และ Axios

## การตั้งค่าโปรเจค

1. **โคลนโปรเจค** จาก GitHub
2. **เปิดโฟลเดอร์โปรเจค** ใน VS Code
3. **ติดตั้ง Node Modules**:
    - รันคำสั่งต่อไปนี้ใน terminal:
        ```bash
        npm install
        ```
    - เริ่มโปรเจคด้วยคำสั่ง:
        ```bash
        npm start
        ```

## การตั้งค่าเส้นทาง Route และเมนู Workshop2

1. **สร้าง Route สำหรับ Workshop2**:

    - เพิ่ม route ในไฟล์ `src/app.js`:

        ```javascript
        import Workshop2 from "./pages/Workshop2";

        <Route path="/workshop2" element={<Workshop2 />} />;
        ```

2. **เพิ่มเมนูใน Navbar**:
    - เพิ่มลิงก์ใน `Navbar.js`:
        ```javascript
        <li>
        	<NavLink to="/workshop2" className={({ isActive }) => (isActive ? "active-link" : "")}>
        		Workshop 2
        	</NavLink>
        </li>
        ```

## ฟังก์ชัน API

1.  **ดึงข้อมูลสินค้า**:

    -   กำหนดฟังก์ชัน `fetchProducts` ในไฟล์ `src/api.js`:
        ```javascript
        export const fetchProducts = async () => {
        	try {
        		const response = await axios.get(BASE_URL);
        		return response.data;
        	} catch (error) {
        		console.error("Error fetching products:", error);
        		throw error;
        	}
        };
        ```

2.  **ใช้ State และ Effect เพื่อดึงข้อมูล**:

    -   ตั้งค่า `useState` และ `useEffect` ใน component ของคุณ:

    ```javascript
    const [products, setProducts] = useState([]);

    useEffect(() => {
    	const loadProducts = async () => {
    		setLoading(true); // เปิดแสดงโหลดเดอร์
    		const data = await fetchProducts().finally(() => setLoading(false));
    		console.log(data);
    		setProducts(data); // เก็บข้อมูลสินค้าที่ดึงมาได้ใน state
    	};
    	loadProducts();
    }, []);
    ```

## การแสดงผลสินค้าและการจัดการสินค้า

1. **แสดงผลสินค้า**:

    - เรนเดอร์รายการสินค้า:

        ```javascript
        {
        	products.map((product) => (
        		<div className="product-card">
        			{/* แสดงรูปภาพสินค้า */}
        			<div className="product-image-container">
        				<img
        					src={product.image}
        					alt="example"
        					className="product-image"
        					onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // ขยายรูปเมื่อเลื่อนเมาส์
        					onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} // ย่อรูปกลับเมื่อออกจากรูป
        				/>
        			</div>

        			{/* รายละเอียดสินค้า */}
        			<div className="product-details">
        				<div className="product-header">
        					<span className="product-title ellipsis-2">{product.title}</span>
        				</div>
        				<span className="product-category">Category: {product.category}</span>
        			</div>

        			{/* คำอธิบายสินค้า */}
        			<div className="product-description ellipsis">{product.description}</div>

        			{/* ส่วนราคาและการกระทำเพิ่มเติม */}
        			<div className="product-footer">
        				<div className="product-price-container">
        					<span className="product-total-label">Total price:</span>
        					<span className="product-price">$ {product.price}</span>
        				</div>
        			</div>
        		</div>
        	));
        }
        ```

2. **เพิ่มสินค้าใหม่**:

    - กำหนดฟังก์ชัน `addProduct` สำหรับอัพเดตสินค้า:

    ```javascript
    export const addProduct = async (product) => {
    	try {
    		const response = await axios.post(BASE_URL, product);
    		return response.data;
    	} catch (error) {
    		console.error("Error adding product:", error);
    		throw error;
    	}
    };
    ```

    - กำหนดสถานะสำหรับสินค้าตัวใหม่:
        ```javascript
        const [newProduct, setNewProduct] = useState({
        	title: "",
        	price: "",
        	description: "",
        	image: "",
        	category: "",
        });
        ```
    - จัดการการเปลี่ยนแปลงข้อมูลและการเพิ่มสินค้า:

        ```javascript
        const handleInputChange = (e) => {
        	const { name, value } = e.target;
        	setNewProduct({ ...newProduct, [name]: value });
        };

        const handleAddProduct = async () => {
        	setLoading(true);
        	const addedProduct = await addProduct({
        		...newProduct,
        		image: newProduct.image || "https://fakeimg.pl/350x200/?text=World&font=lobster", // ตั้งค่า default รูปภาพหากไม่มี
        	}).finally(() => setLoading(false));
        	setProducts([...products, addedProduct]); // เพิ่มสินค้าใหม่ลงในรายการ
        	setNewProduct({ title: "", price: "", description: "", image: "", category: "" }); // รีเซ็ตฟอร์ม
        };
        ```

3. **อัพเดตข้อมูลสินค้า**:

    - กำหนดฟังก์ชัน `updateProduct` สำหรับอัพเดตสินค้า:
        ```javascript
        export const updateProduct = async (id, updatedProduct) => {
        	try {
        		const response = await axios.put(`${BASE_URL}/${id}`, updatedProduct);
        		return response.data;
        	} catch (error) {
        		console.error("Error updating product:", error);
        		throw error;
        	}
        };
        ```
    - จัดการโหมดแก้ไขและการอัพเดตสินค้า:

        ```javascript
        const handleEditProduct = (product) => {
        	setEditMode(true);
        	setEditingProductId(product.id);
        	setNewProduct({
        		title: product.title,
        		price: product.price,
        		description: product.description,
        		image: product.image,
        		category: product.category,
        	});
        };

        const handleUpdateProduct = async () => {
        	setLoading(true);
        	const updatedProduct = await updateProduct(editingProductId, newProduct).finally(() => setLoading(false));
        	setProducts(products.map((product) => (product.id === editingProductId ? updatedProduct : product))); // อัปเดตรายการสินค้า
        	setEditMode(false); // ปิดโหมดแก้ไข
        	setNewProduct({ title: "", price: "", description: "", image: "", category: "" }); // รีเซ็ตฟอร์ม
        	setEditingProductId(null); // ล้างค่าไอดีสินค้าที่แก้ไข
        };
        ```

4. **ลบสินค้า**:

    - กำหนดฟังก์ชัน `deleteProduct` สำหรับลบสินค้า:
        ```javascript
        export const deleteProduct = async (id) => {
        	try {
        		const response = await axios.delete(`${BASE_URL}/${id}`);
        		return response.data;
        	} catch (error) {
        		console.error("Error deleting product:", error);
        		throw error;
        	}
        };
        ```
    - จัดการการลบสินค้า:
        ```javascript
        const handleDeleteProduct = async (id) => {
        	setLoading(true);
        	await deleteProduct(id).finally(() => setLoading(false));
        	setProducts(products.filter((product) => product.id !== id)); // ลบสินค้าที่มีไอดีตรงกันออกจากรายการ
        };
        ```

5. **สร้างปุ่มสำหรับการแก้ไข และการลบรายการสินค้า**:

    - ตัวอย่าง UI สำหรับการเพิ่มปุ่มลบหรือแก้ไขสินค้า:

        ```javascript
        <div className="product-actions">
        	<button className="button-3" onClick={() => handleEditProduct(product)}>
        		แก้ไข
        	</button>
        	<div className="delete-icon-container" onClick={() => handleDeleteProduct(product.id)}>
        		<img className="delete-icon" src="/images/delete.png" alt="icon delete" />
        	</div>
        </div>
        ```

6. **การจัดการ UI การเพิ่มและแก้ไขสินค้า**:

    - ตัวอย่าง UI สำหรับการเพิ่มหรือแก้ไขสินค้า:

        ```javascript
        <div
        	style={{
        		border: "1px solid #e6e6e6",
        		display: "flex",
        		flexDirection: "column",
        		padding: "15px",
        		borderRadius: "5px",
        		flexWrap: "wrap",
        	}}
        >
        	<h2>{editMode ? "แก้ไขรายการสินค้า" : `เพิ่มรายการสินค้า`}</h2>
        	<div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        		<div style={{ width: "100%", display: "flex", gap: "10px" }}>
        			{/* InputCustom สำหรับกรอกข้อมูลสินค้า */}
        			<InputCustom
        				type="text"
        				className="input"
        				name="title"
        				value={newProduct.title}
        				onChange={handleInputChange}
        				placeholder="กรอกข้อมูล Product Title"
        				label="Product Title"
        			/>
        			<InputCustom
        				type="text"
        				className="input"
        				name="category"
        				value={newProduct.category}
        				onChange={handleInputChange}
        				placeholder="กรอกข้อมูล Product Category"
        				label="Product Category"
        			/>
        			<InputCustom
        				type="text"
        				className="input"
        				name="price"
        				value={newProduct.price}
        				onChange={handleInputChange}
        				placeholder="กรอกข้อมูล Product Price"
        				label="Product Price"
        			/>
        		</div>
        		<div
        			style={{
        				width: "100%",
        				display: "flex",
        				gap: "10px",
        				padding: "20px",
        				border: "1px solid rgb(205, 215, 225)",
        				background: "rgb(251, 252, 254)",
        				borderRadius: "8px",
        			}}
        		>
        			{/* InputCustom สำหรับกรอกคำอธิบายและ URL รูปภาพ */}
        			<InputCustom
        				type="text"
        				className="input"
        				name="description"
        				value={newProduct.description}
        				onChange={handleInputChange}
        				placeholder="กรอกข้อมูล Product Description"
        				label="Product Description"
        			/>
        			<InputCustom
        				type="text"
        				className="input"
        				name="image"
        				value={newProduct.image}
        				onChange={handleInputChange}
        				placeholder="กรอกข้อมูล Product Image URL"
        				label="Product Image URL"
        			/>
        		</div>
        	</div>
        	{/* ปุ่มเพิ่มหรือแก้ไขสินค้า */}
        	<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        		<button className="button-3" onClick={editMode ? handleUpdateProduct : handleAddProduct}>
        			{editMode ? "แก้ไขสินค้า" : `เพิ่มสินค้า`}
        		</button>
        	</div>
        </div>
        ```

## หมายเหตุเพิ่มเติม

-   **แสดงหมวดหมู่สินค้า**: หมวดหมู่ของสินค้าแสดงอยู่บนการ์ดสินค้าโดยใช้ชื่อคลาสที่เหมาะสมและโครงสร้าง HTML ที่สอดคล้องกัน
