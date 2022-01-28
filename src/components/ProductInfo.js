import React, { useEffect } from 'react';
import { v1 } from 'uuid';
import { Grid, Text, Input } from 'common';
import { bg } from 'styles/palette';

const ProductInfo = ({ click }) => {
  const PRODUCT_ID = v1();
  const valueList = document.querySelectorAll('input').forEach((el) => el.value);

  useEffect(() => {
    if (click) {
      console.log('상품명:', valueList[0]);
      console.log('상품 코드:', PRODUCT_ID);
      console.log('상품 소개 정보:', valueList[1]);
    }
  }, [click, valueList, PRODUCT_ID]);

  return (
    <>
      <Grid isFlex borderBottom>
        <Grid width='8.6rem' bg={bg.field} height='3.5rem' isFlex align='center' padding='0 0 0 1rem'>
          <Text bold>상품명 *</Text>
        </Grid>
        <Grid isFlex width='20rem' height='3.5rem' padding='.5rem 0 0 1rem'>
          <Input placeholder='상품명을 입력해주세요.' width='90%' height='80%' padding='.5rem' />
        </Grid>
        <Grid bg={bg.field} width='8.6rem' height='3.5rem' isFlex align='center' padding='0 0 0 .5rem'>
          <Text bold>상품 코드</Text>
        </Grid>
        <Grid width='20rem' isFlex align='center' padding='0 0 0 .5rem'>
          <Text>{PRODUCT_ID}</Text>
        </Grid>
      </Grid>
      <Grid isFlex borderBottom>
        <Grid width='8.6rem'>
          <Grid bg={bg.field} height='3.5rem' isFlex align='center' padding='0 0 0 1rem'>
            <Text bold>상품 구성 소개 정보 *</Text>
          </Grid>
        </Grid>
        <Grid isFlex width='80%' height='3.5rem' padding='.5rem 0 0 1rem'>
          <Input placeholder='상품 구성 소개 정보를 입력해주세요.' width='90%' height='80%' padding='.5rem' />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductInfo;
