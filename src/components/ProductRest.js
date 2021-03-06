import React, { useEffect } from 'react';
import { Grid, Text } from 'common';
import { bg } from 'styles/palette';

const ProductRest = ({ setProductRest }) => {
  const stockNumber = 7;

  useEffect(() => {
    setProductRest(stockNumber);
  }, [setProductRest]);

  return (
    <Grid isFlex borderBottom>
      <Grid>
        <Grid
          width="8.6rem"
          bg={bg.field}
          height="3.5rem"
          isFlex
          align="center"
          padding="0 0 0 1rem"
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
        <Text>{stockNumber}개</Text>
      </Grid>
    </Grid>
  );
};

export default ProductRest;
