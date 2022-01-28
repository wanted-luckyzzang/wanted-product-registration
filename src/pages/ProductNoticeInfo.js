import React from "react";
import styled from "styled-components";

import { Grid, Button, Text, Input } from "common";
import {
	NoticeInfo,
	OfferThankCard,
	ProductShppingSetting,
	SaveMileage,
} from "components/ProductNoticeInfo/index";

import Header from "components/Header";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const ProductNoticeInfo = (props) => {
	return (
		<Grid width="60rem" isFlex>
			<Sidebar />
			<Grid width="55rem" border isFlex column>
				<Header />
				<Navbar />
				<Grid marginTop="2rem" border isFlex column border>
					{/* 15번 상품 정보 고시 */}
					<Grid
						height="auto"
						width="auto"
						margin="2rem 2rem 0 2rem"
						align="center"
						border
					>
						<OptionTitle>상품 정보 고시</OptionTitle>
						<NoticeInfo />
					</Grid>

					{/* 16-18 상품 배송 설정 */}
					<Grid
						height="auto"
						width="auto"
						margin="2rem 2rem 0 2rem"
						align="center"
						border
					>
						<OptionTitle>상품 배송 설정</OptionTitle>
						<ProductShppingSetting />
					</Grid>
					{/* 19번 마일리지 적립 */}
					<Grid
						height="auto"
						width="auto"
						margin="2rem 2rem 0 2rem"
						align="center"
						border
					>
						<OptionTitle>마일리지 적립</OptionTitle>
						<SaveMileage />
					</Grid>
					{/* 20번 감사카드 제공 */}
					<Grid
						height="auto"
						width="auto"
						margin="2rem 2rem 0 2rem"
						align="center"
						border
					>
						<OptionTitle>기타 설정</OptionTitle>
						<OfferThankCard />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

const OptionTitle = styled.div`
	border-bottom: "1px solid #e3e3e3";
	font-size: "1rem";
	height: "2rem";
`;

export default ProductNoticeInfo;
