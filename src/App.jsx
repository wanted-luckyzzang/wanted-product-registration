import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import "styles/App.css";
import FilterTag from "components/Filtertag";
import ProductsPeriodSetting from "pages/ProductsPeriodSetting";
import ProductNoticeInfo from "pages/ProductNoticeInfo";
import ImageUpload from "pages/ImageUpload";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<ProductsPeriodSetting />} />
				<Route path="/filtertag" element={<FilterTag />} />
				<Route path="/noticeInfo" element={<ProductNoticeInfo />} />
				<Route path="/imageupload" element={<ImageUpload />} />
			</Routes>
		</>
	);
}

export default App;
