import React, { useState, useEffect } from "react";
import { fetchProducts, addProduct, deleteProduct, updateProduct } from "../api";
import "./Workshop2.css";
import InputCustom from "../components/InputCustom";
import LoaderOverlay from "../components/LoaderOverlay";

const Workshop2 = () => {
	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState({
		title: "",
		price: "",
		description: "",
		image: "",
		category: "",
	});
	const [editMode, setEditMode] = useState(false);
	const [editingProductId, setEditingProductId] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const loadProducts = async () => {
			setLoading(true);
			const data = await fetchProducts().finally(() => setLoading(false));
			console.log(data);
			setProducts(data);
		};
		loadProducts();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewProduct({
			...newProduct,
			[name]: value,
		});
	};

	const handleAddProduct = async () => {
		setLoading(true);
		const addedProduct = await addProduct({
			...newProduct,
			image: newProduct.image || "https://fakeimg.pl/350x200/?text=World&font=lobster",
		}).finally(() => setLoading(false));
		setProducts([...products, addedProduct]);
		setNewProduct({ title: "", price: "", description: "", image: "", category: "" });
	};

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
		setProducts(products.map((product) => (product.id === editingProductId ? updatedProduct : product)));
		setEditMode(false);
		setNewProduct({ title: "", price: "", description: "", image: "", category: "" });
		setEditingProductId(null);
	};

	const handleDeleteProduct = async (id) => {
		setLoading(true);
		await deleteProduct(id).finally(() => setLoading(false));
		setProducts(products.filter((product) => product.id !== id));
	};

	return (
		<div style={{ overflow: "scroll" }}>
			<LoaderOverlay loading={loading} />
			<h1>Workshop 2 - Product Management</h1>
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

				<div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
					<button className="button-3" onClick={editMode ? handleUpdateProduct : handleAddProduct}>
						{editMode ? "แก้ไขสินค้า" : `เพิ่มสินค้า`}
					</button>
				</div>
			</div>

			<h2>รายการสินค้า</h2>
			<div className="product-list">
				{products.map((product) => (
					<div className="product-card">
						<div className="product-image-container">
							<img
								src={product.image}
								alt="example"
								className="product-image"
								onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
								onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
							/>
						</div>

						<div className="product-details">
							<div className="product-header">
								<span className="product-title ellipsis-2">{product.title}</span>
							</div>
							<span className="product-category">Category: {product.category}</span>
						</div>

						<div className="product-description ellipsis">{product.description}</div>

						<div className="product-footer">
							<div className="product-price-container">
								<span className="product-total-label">Total price:</span>
								<span className="product-price">$ {product.price}</span>
							</div>

							<div className="product-actions">
								<button className="button-3" onClick={() => handleEditProduct(product)}>
									แก้ไข
								</button>
								<div className="delete-icon-container" onClick={() => handleDeleteProduct(product.id)}>
									<img className="delete-icon" src="/images/delete.png" alt="icon delete" />
								</div>
							</div>
						</div>
					</div>

					// <div
					// 	style={{
					// 		padding: "16px",
					// 		display: "flex",
					// 		flexDirection: "column",
					// 		border: "1px solid #cdd7e1",
					// 		gap: "0.75rem 1rem",
					// 		borderRadius: "8px",
					// 		background: "#fbfcfe",
					// 		justifyContent: "space-between",
					// 	}}
					// >
					// 	<div
					// 		style={{
					// 			width: "100%",
					// 			height: "150px",
					// 			overflow: "hidden",
					// 			borderRadius: "10px",
					// 			background: "#fff",
					// 			border: "1px solid #cdd7e1",
					// 		}}
					// 	>
					// 		<img
					// 			src={product.image}
					// 			alt="example"
					// 			style={{
					// 				width: "100%",
					// 				height: "100%",
					// 				objectFit: "contain",
					// 				transition: "transform 0.3s ease",
					// 			}}
					// 			onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
					// 			onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
					// 		/>
					// 	</div>
					// 	<div>
					// 		<div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					// 			<span className="ellipsis-2" style={{ fontSize: "18px", fontWeight: 500 }}>
					// 				{product.title}
					// 			</span>
					// 		</div>
					// 		<span style={{ fontSize: "14px", color: "#555e68", fontWeight: 400 }}>
					// 			Category: {product.category}
					// 		</span>
					// 	</div>

					// 	<div
					// 		className="ellipsis"
					// 		style={{ fontSize: "14px", fontWeight: 400, color: "#555e68", textIndent: "20px" }}
					// 	>
					// 		{product.description}
					// 	</div>
					// 	<div
					// 		style={{
					// 			display: "flex",
					// 			flexDirection: "row",
					// 			alignItems: "center",
					// 			justifyContent: "space-between",
					// 		}}
					// 	>
					// 		<div style={{ display: "flex", flexDirection: "column" }}>
					// 			<span style={{ fontSize: "14px", color: "#555e68", fontWeight: 400 }}>
					// 				Total price:
					// 			</span>
					// 			<span style={{ fontSize: "20px", color: "#2ea44f", fontWeight: 500 }}>
					// 				$ {product.price}
					// 			</span>
					// 		</div>
					// 		<div
					// 			style={{
					// 				display: "flex",
					// 				flexDirection: "row",
					// 				gap: "5px",
					// 				justifyContent: "center",
					// 				alignItems: "center",
					// 			}}
					// 		>
					// 			<button className="button-3" onClick={() => handleEditProduct(product)}>
					// 				แก้ไข
					// 			</button>

					// 			<div
					// 				style={{ width: "30px", height: "30px", cursor: "pointer" }}
					// 				onClick={() => handleDeleteProduct(product.id)}
					// 			>
					// 				<img
					// 					style={{ width: "100%", height: "100%", objectFit: "cover" }}
					// 					src="/images/delete.png"
					// 					alt="icon delete"
					// 				/>
					// 			</div>
					// 		</div>
					// 	</div>
					// </div>
				))}
			</div>
		</div>
	);
};

export default Workshop2;
