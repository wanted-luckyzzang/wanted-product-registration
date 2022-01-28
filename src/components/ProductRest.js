import React from 'react';
import { Grid, Text } from 'common';
import { bg } from 'styles/palette';

const ProductRest = () => {
  return (
    <Grid isFlex borderBottom>
      <Grid>
        <Grid
          width="8.6rem"
          bg={bg.field}
          height="3.5rem"
          isFlex
          align="center"
          padding="0 0 0 .5rem"
        >
          <Text bold>상품 총 재고 *</Text>
        </Grid>
      </Grid>
      <Grid
        isFlex
        width="80%"
        height="3.5rem"
        padding="0 0 0 .5rem"
        align="center"
      >
        <Text>7개</Text>
      </Grid>
    </Grid>
  );
};

export default ProductRest;
