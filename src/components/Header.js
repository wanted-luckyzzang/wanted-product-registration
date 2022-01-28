import React from "react";
import styled from "styled-components";
import { Grid, Button, Text } from "common";

const Header = () => {
	return (
		<>
			<Grid borderBottom="1px solid #e3e3e3" position="sticky">
				<EmptyRightHeader />
			</Grid>
		</>
	);
};

const EmptyRightHeader = styled.header`
	width: 55rem;
	height: 2.9rem;
`;

export default Header;
