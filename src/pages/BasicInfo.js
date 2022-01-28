import React from 'react';
import { Category, FilterTag, ProductInfo, ProductRest, ProductImage, FooterBtn } from 'components';
import { Grid, Text } from 'common';

const BasicInfo = () => {
  return (
    <>
      <Grid width='60rem' border>
        <Grid height='2.5rem' isFlex align='center' borderBottom padding='0 0 0 1rem'>
          <Text bold>상품 기본 정보</Text>
        </Grid>

        <Category />

        <FilterTag />
        <ProductInfo />
        <ProductImage />
        <ProductRest />
      </Grid>
      <FooterBtn params='productoption' />
    </>
  );
};

export default BasicInfo;
