import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Text } from 'common';

export const Category = (props) => {
  return (
    <Grid width='40rem' margin='1rem auto 1rem' border isFlex column>
      <Grid height='3rem' isFlex align='center' borderBottom>
        상품 기본 정보
      </Grid>
      <Grid isFlex height='20rem'>
        <Grid width='10rem' borderRight>
          카테고리 *
        </Grid>
        <Grid></Grid>
      </Grid>
    </Grid>
  );
};
