import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Text } from 'common';

export const Category = (props) => {
  return (
    <Grid width='600px' margin='20px auto 20px' border isFlex column>
      <Grid height='48px' isFlex align='center' borderBottom>
        상품 기본 정보
      </Grid>
      <Grid isFlex height='400px'>
        <Grid width='300px' borderRight>
          카테고리 *
        </Grid>
        <Grid></Grid>
      </Grid>
    </Grid>
  );
};
