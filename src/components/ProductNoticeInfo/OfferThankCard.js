import styled from "styled-components";
import { Grid, Button, Text, Input, Container } from "common";
import ProductOptionToggle from "./ProductOptionToggle";

const OfferThankCard = (props) => {
	return (
		<>
			<Grid isFlex height="5rem" width="auto">
				<Grid width="8rem" borderRight padding="0.5rem">
					<OptionTitle>감사카드</OptionTitle>
					<OptionTitle>제공</OptionTitle>
				</Grid>
				<ProductOptionToggle />
			</Grid>
		</>
	);
};

const OptionTitle = styled.div`
	font-size: 0.9rem;
`;

export default OfferThankCard;
