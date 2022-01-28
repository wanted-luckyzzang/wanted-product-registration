import styled from "styled-components";
import { Grid, Switch } from "common";

const OfferThankCard = () => {
	return (
		<>
			<Grid isFlex height="5rem" width="auto">
				<Grid width="8rem" borderRight padding="0.5rem">
					<OptionTitle>감사카드</OptionTitle>
					<OptionTitle>제공</OptionTitle>
				</Grid>
				<Switch />
			</Grid>
		</>
	);
};

const OptionTitle = styled.div`
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
`;

export default OfferThankCard;
