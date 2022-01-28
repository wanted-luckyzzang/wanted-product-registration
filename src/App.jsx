import React from "react";
import { Routes, Route } from "react-router-dom";

import "styles/App.css";
import GlobalStyle from "styles/GlobalStyle";

import FilterTag from "components/Filtertag";
import ProductsPeriodSetting from "pages/ProductsPeriodSetting";
import Container from "common/Container";
import ProductNoticeInfo from "pages/ProductNoticeInfo";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Container />} />
				<Route path="/period" element={<ProductsPeriodSetting />} />
				<Route path="/filtertag" element={<FilterTag />} />
				<Route path="/noticeInfo" element={<ProductNoticeInfo />} />
			</Routes>
		</>
	);
}

export default App;
