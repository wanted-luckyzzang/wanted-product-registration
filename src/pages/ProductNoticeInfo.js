import React from "react";
import { Grid, Button, Text, Input } from "common";
import NoticeInfo from "../components/NoticeInfo";
import Header from "components/Header";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

const ProductNoticeInfo = (props) => {
	return (
		<Grid width="60rem" isFlex>
			<Sidebar />
			<Grid width="50rem" border isFlex column>
				<Header />
				<Navbar />
				<Grid margin="1rem auto auto auto" border isFlex column border>
					<Grid
						padding="0.5rem 1.5rem"
						height="2.5rem"
						isFlex
						align="center"
						borderBottom
					>
						상품 정보 고시
					</Grid>
					{/* 15번 상품 정보 고시 */}
					<NoticeInfo />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ProductNoticeInfo;
