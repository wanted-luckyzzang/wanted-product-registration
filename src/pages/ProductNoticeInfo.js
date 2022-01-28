import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "common";
import {
	NoticeInfo,
	OfferThankCard,
	ProductShppingSetting,
	SaveMileage,
} from "components/ProductNoticeInfo/index";
const ProductNoticeInfo = () => {
	const [noticeInfo, setNoticeInfo] = useState([]);
	const AddNoticeInfoHandler = () => {
		setNoticeInfo([]);
		console.log(noticeInfo);
		setNoticeInfo = true;
		if (noticeInfo) {
			setNoticeInfo((prev) => [...prev, noticeInfo]);
			console.log("dd");
			console.log(noticeInfo);
			// setNoticeInfo((prev) => [...prev, noticeInfo]);
		}
	};
	return (
		<Grid isFlex>
			<Grid border isFlex column>
				<Grid marginTop="2rem" border isFlex column border>
					<Grid border height="2.5rem" width="auto" margin="2rem 2rem 0 2rem">
						<Text bold size="1rem" margin="0.5rem">
							상품 정보 고시
						</Text>
					</Grid>
					{noticeInfo && (
						<Grid
							bg="#d3d3d36b"
							height="auto"
							width="auto"
							margin="0 2rem"
							align="center"
							border
						>
							{/* 15번 상품 정보 고시 */}
							<NoticeInfo />
							<Footer>
								<Button
									width="100%"
									bg="transparent"
									color="#352f6e"
									border="#352f6e"
									fontWeight="bold"
									_onClick={AddNoticeInfoHandler}
									margin="0 0 1rem 0"
									bold
								>
									+ 정보고시 추가
								</Button>
							</Footer>
						</Grid>
					)}

					<Grid
						border
						borderBottom="transparent"
						height="2.5rem"
						width="auto"
						margin="2rem 2rem 0 2rem"
					>
						<Text bold size="1rem" margin="0.5rem">
							상품 배송 설정
						</Text>
					</Grid>
					<Grid
						height="auto"
						width="auto"
						margin="0 2rem"
						align="center"
						border
					>
						{/* 16-18 상품 배송 설정 */}
						<ProductShppingSetting />
					</Grid>

					<Grid
						border
						borderBottom="transparent"
						height="2.5rem"
						width="auto"
						margin="2rem 2rem 0 2rem"
					>
						<Text bold size="1rem" margin="0.5rem">
							상품 혜택 허용 설정
						</Text>
					</Grid>
					<Grid
						height="auto"
						width="auto"
						margin="0 2rem"
						align="center"
						border
					>
						{/* 19번 마일리지 적립 */}
						<SaveMileage />
					</Grid>

					<Grid
						border
						borderBottom="transparent"
						height="2.5rem"
						width="auto"
						margin="2rem 2rem 0 2rem"
					>
						<Text bold size="1rem" margin="0.5rem">
							기타 설정
						</Text>
					</Grid>
					<Grid
						height="auto"
						width="auto"
						margin="0 2rem 2rem 2rem"
						align="center"
						border
					>
						{/* 20번 감사카드 제공 */}
						<OfferThankCard />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};
const OptionTitle = styled.div`
	border-bottom: "1px solid #E3E3E3";
	font-size: "1rem";
	height: "2rem";
`;

const Footer = styled.div`
	width: 96.5%;
	margin: 0 auto;
`;
export default ProductNoticeInfo;
