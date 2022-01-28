import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
	ProductsPeriodSetting,
	BasicInfo,
	ProductNoticeInfo,
	ProductOption,
	// ImageSelect,
} from "pages";
import { Layout } from "components";
import "styles/App.css";

function App() {
	const [clickFlag, setClickFlag] = useState(0);

	return (
		<Layout clickFlag={clickFlag} setClickFlag={setClickFlag}>
			<Routes>
				<Route path="/" element={<ProductsPeriodSetting />} />
				<Route path="/basicinfo" element={<BasicInfo />} />
				<Route path="/productoption" element={<ProductOption />} />
				<Route path="/noticeinfo" element={<ProductNoticeInfo />} />
				{/* <Route path="/imageselect" element={<ImageSelect />} /> */}
			</Routes>
		</Layout>
	);
}

export default App;
