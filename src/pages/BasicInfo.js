import React from 'react';
import Category from 'components/Category';
import FilterTag from 'components/FilterTag/FilterTag';
import { Grid, Text } from 'common';
import { ProductInfo, ProductRest } from 'components';
import ProductImage from 'components/ProductImage';

const BasicInfo = () => {
  return (
    <Grid border>
      <Grid width="60rem" border margin="1rem 0 0 1rem">
        <Grid
          height="2.5rem"
          isFlex
          align="center"
          borderBottom
          padding="0 0 0 1rem"
        >
          <Text bold>상품 기본 정보</Text>
        </Grid>

        <Category />

        <FilterTag />
        <ProductInfo />
        <ProductImage />
        <ProductRest />
      </Grid>
    </Grid>
  );
};

export default BasicInfo;
