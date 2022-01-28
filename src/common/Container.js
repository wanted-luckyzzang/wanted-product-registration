import styled from "styled-components";
import Button from "./Button";
import Grid from "./Grid";
import Text from "./Text";
import { useNavigate } from "react-router";

const Container = (props) => {
	const navigate = useNavigate();
	const { children, SalesSettingSubmitHandler } = props;

	return (
		<>
			<Grid
				width="75rem"
				height="50rem"
				margin="20px auto 20px"
				border="1px solid black"
				isFlex
			>
				<Grid width="15rem" height="100%" borderRight>
					<Header></Header>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-evenly",
							height: "60%",
						}}
					>
						<Button _onClick={() => navigate(`/period`)}>
							노출 및 판매기간 설정
						</Button>
						<Button>상품 기본 정보</Button>
						<Button>상품 옵션</Button>
						<Button>상품 등록</Button>
						<Button _onClick={() => navigate(`/noticeInfo`)}>
							상품 정보 고시
						</Button>
					</div>
				</Grid>
				<Grid
					height="100%"
					gridType="form"
					_onSubmit={SalesSettingSubmitHandler}
				>
					<EmptyHeader></EmptyHeader>
					<SectionTitle>
						<Text size="1.1rem" bold>
							상품 등록
						</Text>
						<Button width="6rem" height="2rem">
							<Text color="#FFFFFF" size="1rem">
								저장하기
							</Text>
						</Button>
					</SectionTitle>
					<Grid width="97%" height="80%" margin="auto">
						{children}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

const Header = styled.header`
	height: 6%;
	border-bottom: 1px solid #e3e3e3;
`;

const EmptyHeader = styled.header`
	height: 6%;
	border-bottom: 1px solid #e3e3e3;
`;

const SectionTitle = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e3e3e3;
	padding: 0.3rem 2rem;
	margin: auto 0.5rem;
	align-items: center;
	margin-bottom: 1.5rem;
`;

export default Container;
