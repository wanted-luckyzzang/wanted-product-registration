import React from 'react';
import { Grid, Checkbox, Text } from 'common';
import { bg } from 'styles/palette';

export const Category = (props) => {
  return (
    <Grid width='40rem' margin='1rem auto 1rem' border isFlex column>
      <Grid height='3rem' isFlex align='center' borderBottom>
        <Text bold>상품 기본 정보</Text>
      </Grid>
      <Grid isFlex height='20rem'>
        <Grid width='10rem' borderRight bg={bg.category}>
          카테고리 *
        </Grid>
        <Grid isFlex padding='0.8rem'>
          <Grid width='18rem' border padding='0.8rem 1.2rem' margin='0 1rem 0 0' radius>
            <Grid isFlex align='center'>
              <Checkbox />
              <Text>카테고리명</Text>
            </Grid>
          </Grid>
          <Grid width='14rem' border padding='0.8rem 1.2rem' radius>
            dd
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
