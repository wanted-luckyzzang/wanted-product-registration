import React from "react";
import { Routes, Route } from "react-router-dom";

import "styles/App.css";
import GlobalStyle from "styles/GlobalStyle";

import FilterTag from "components/Filtertag";
import SalesPeriodSetting from "pages/SalesPeriodSetting";
import Container from "common/Container";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Container />} />
				<Route path="/period" element={<SalesPeriodSetting />} />
				<Route path="/filtertag" element={<FilterTag />} />
			</Routes>
		</>
	);
}

export default App;
