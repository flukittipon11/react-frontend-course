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
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
