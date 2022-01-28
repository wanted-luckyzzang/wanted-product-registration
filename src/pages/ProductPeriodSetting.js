import React, { useState } from "react";
import { Grid, Button, Text, Input, Container } from "common";

import { useNavigate } from "react-router";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const ProductsPeriodSetting = (props) => {
	const navigate = useNavigate();
	const [selectedShowingOption, setSelectedShowingOption] = useState();
	const [selectedSellingOption, setSelectedSellingOption] = useState();

	const SelectShowingBtnHandler = (e) => {
		setSelectedShowingOption(e.target.value);
		// if (e.target.value === "setForShowing") {
		// 	setIsSelectedSetForShowing = true;
		// }
	};

	const SelectSellingBtngHandler = (e) => {
		setSelectedSellingOption(e.target.value);
	};
	const SalesSettingSubmitHandler = (e) => {
		e.preventDefault();
		console.log(e);
		// button
		// console.log(e.target[0].checked && e.target[0].value);

		// radio
		console.log(e.target[1].checked && e.target[1].value);
		console.log(e.target[2].checked && e.target[2].value);
		console.log(e.target[3].checked && e.target[3].value);
		console.log(e.target[4].value, e.target[5].value);
		console.log(e.target[6].checked && e.target[6].value);
		console.log(e.target[7].checked && e.target[7].value);
		console.log(e.target[8].checked && e.target[8].value);
		console.log(e.target[9].value, e.target[10].value);
	};

	return (
		<>
			<Grid width="60rem" isFlex>
				<Sidebar />
				<Grid width="50rem" border isFlex column>
					<Header />
					<Navbar />
					<Grid height="2.5rem" isFlex align="center" borderBottom>
						노출 및 판매기간 설정
					</Grid>
					{/* 1번 상품 노출 기한 */}
				</Grid>
			</Grid>
		</>
	);
};

export default ProductsPeriodSetting;
