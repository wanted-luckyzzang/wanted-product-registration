import React, { useState } from 'react';
import { Category, FilterTag, ProductInfo, ProductRest, ProductImage, FooterBtn } from 'components';
import { Grid, Text } from 'common';

const BasicInfo = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Grid width='60rem' border>
        <Grid height='2.5rem' isFlex align='center' borderBottom padding='0 0 0 1rem'>
          <Text bold>상품 기본 정보</Text>
        </Grid>

        <Category click={click} />
        <FilterTag click={click} />
        <ProductInfo click={click} />
        <ProductImage click={click} />
        <ProductRest click={click} />
      </Grid>

      <FooterBtn params='productoption' setClick={setClick} />
    </>
  );
};

export default BasicInfo;
