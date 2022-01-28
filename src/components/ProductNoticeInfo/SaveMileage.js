<<<<<<< HEAD
import styled from 'styled-components';
import { Grid, Button, Text, Input, Container } from 'common';
import ProductOptionToggle from './ProductOptionToggle';

const SaveMileage = (props) => {
  return (
    <>
      <Grid isFlex height='5rem' width='auto'>
        <Grid width='8rem' borderRight padding='0.5rem'>
          <OptionTitle>마일리지 적립</OptionTitle>
        </Grid>
        <ProductOptionToggle />
      </Grid>
    </>
  );
=======
import styled from "styled-components";
import { Grid, Toggle } from "common";

const SaveMileage = (props) => {
	return (
		<>
			<Grid isFlex height="5rem" width="auto">
				<Grid width="8rem" borderRight padding="0.5rem">
					<OptionTitle>마일리지 적립</OptionTitle>
				</Grid>
				<Toggle />
			</Grid>
		</>
	);
>>>>>>> main
};

const OptionTitle = styled.div`
  font-size: 0.9rem;
`;

export default SaveMileage;
