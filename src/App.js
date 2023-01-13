import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import "./style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/list" element={<ListPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
