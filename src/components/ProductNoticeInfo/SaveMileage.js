import styled from "styled-components";
import { Grid, Switch } from "common";

const SaveMileage = (props) => {
	return (
		<>
			<Grid isFlex height="5rem" width="auto">
				<Grid width="8rem" borderRight padding="0.5rem">
					<OptionTitle>마일리지 적립</OptionTitle>
				</Grid>
				<Switch />
			</Grid>
		</>
	);
};

const OptionTitle = styled.div`
	font-size: 0.9rem;
`;

export default SaveMileage;
