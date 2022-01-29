import { Grid, Button } from "common";
import styled from "styled-components";

const Navbar = () => {
	const cursorUrl =
		"https://cdn0.iconfinder.com/data/icons/simple-arrow-set-for-the-minimalist/100/arrows-13-512.png";

	return (
		<>
			<Grid width="12rem" position="sticky" borderBottom margin="0">
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "60%",
					}}
				>
					<Button height="43.5px" type="nav">
						기본 설정
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						회원
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						상품
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						진열
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						주문
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						배송
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						프로모션
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						혜택
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						고객 센터 관리
						<Img src={cursorUrl}></Img>
					</Button>
					<Button type="nav">
						알림
						<Img src={cursorUrl}></Img>
					</Button>
				</div>
			</Grid>
		</>
	);
};

const Img = styled.img`
	width: 1.2rem;
	height: 1rem;
	margin-top: 0.5rem;
`;
export default Navbar;
