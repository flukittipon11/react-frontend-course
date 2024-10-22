import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

// GET: Fetch all products
export const fetchProducts = async () => {
	try {
		const response = await axios.get(BASE_URL);
		return response.data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

// POST: Add a new product
export const addProduct = async (product) => {
	try {
		const response = await axios.post(BASE_URL, {
			image:
				product.image ||
				"https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
			...product,
		});
		return response.data;
	} catch (error) {
		console.error("Error adding product:", error);
		throw error;
	}
};

// PUT: Update an existing product by id
export const updateProduct = async (id, updatedProduct) => {
	try {
		const response = await axios.put(`${BASE_URL}/${id}`, updatedProduct);
		return response.data;
	} catch (error) {
		console.error("Error updating product:", error);
		throw error;
	}
};

// DELETE: Remove a product by id
export const deleteProduct = async (id) => {
	try {
		const response = await axios.delete(`${BASE_URL}/${id}`);
		return response.data;
	} catch (error) {
		console.error("Error deleting product:", error);
		throw error;
	}
};
