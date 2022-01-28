import styled from "styled-components";
import { Grid, Button } from "common";
import { useNavigate } from "react-router";

const Sidebar = () => {
	const navigate = useNavigate();

	return (
		<>
			<Grid
				width="12rem"
				position="sticky"
				borderBottom="1px solid #e3e3e3"
				margin="0"
			>
				<LogoLeftHeader>
					<Img src="https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png" />
				</LogoLeftHeader>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						height: "60%",
					}}
				>
					<Button
						height="43.5px"
						margin="0 0 1.3rem 0"
						_onClick={() => navigate(`/period`)}
						border="none"
						borderBottom="1px solid #e3e3e3"
					>
						노출 및 판매기간 설정
					</Button>
					<Button
						border="none"
						borderBottom="1px solid #e3e3e3"
						borderTop="1px solid #e3e3e3"
						margin="0 0 1.2rem 0"
					>
						상품 기본 정보
					</Button>
					<Button
						border="none"
						borderBottom="1px solid #e3e3e3"
						borderTop="1px solid #e3e3e3"
						margin="0 0 1.2rem 0"
					>
						상품 옵션
					</Button>
					<Button
						border="none"
						borderBottom="1px solid #e3e3e3"
						borderTop="1px solid #e3e3e3"
						margin="0 0 1.2rem 0"
					>
						상품 등록
					</Button>
					<Button
						border="none"
						borderBottom="1px solid #e3e3e3"
						borderTop="1px solid #e3e3e3"
						_onClick={() => navigate(`/noticeInfo`)}
					>
						상품 정보 고시
					</Button>
				</div>
			</Grid>
		</>
	);
};

const LogoLeftHeader = styled.header`
	height: 3rem;
	border-bottom: 1px solid #e3e3e3;
`;

const Img = styled.img`
	width: 8rem;
	padding: 0.5rem;
	margin-left: 1rem;
`;

export default Sidebar;
