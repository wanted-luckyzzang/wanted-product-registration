import styled from "styled-components";
import { Grid, Button, Text } from "common";

const Navbar = () => {
	return (
		<>
			<Grid
				padding="0 1rem"
				borderBottom="1px solid #e3e3e3"
				justify="space-between"
				isFlex
				// height="2.2rem"
			>
				<Text size="1.1rem" bold lineHeight="2rem">
					상품 등록
				</Text>
				<Button width="6rem" height="2rem" bg="#352f6e">
					<Text color="#FFFFFF" size="0.9rem">
						저장하기
					</Text>
				</Button>
			</Grid>
		</>
	);
};

export default Navbar;
