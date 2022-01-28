import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProductsPeriodSetting, BasicInfo, ProductNoticeInfo } from "pages";
import "styles/App.css";
import { Layout } from "components";

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<ProductsPeriodSetting />} />
				<Route path="/basicinfo" element={<BasicInfo />} />
				{/* <Route path='/productoption' element={<ProductOption />} /> */}
				{/* <Route path='/productimage' element={<ProductImage />} /> */}
				<Route path="/noticeInfo" element={<ProductNoticeInfo />} />
			</Routes>
		</Layout>
	);
}

export default App;
