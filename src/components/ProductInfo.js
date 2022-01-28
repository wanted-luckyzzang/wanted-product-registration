import React from 'react';
import { Grid, Text } from 'common';
import Input from 'common/Input';
import { bg } from 'styles/palette';
import { v1 } from 'uuid';

const ProductName = () => {
  const PRODUCT_ID = v1();
  return (
    <>
      <Grid isFlex borderBottom>
        <Grid
          width="8.6rem"
          bg={bg.field}
          height="3.5rem"
          isFlex
          align="center"
          padding="0 0 0 1rem"
        >
          <Text bold>상품명 *</Text>
        </Grid>
        <Grid isFlex width="20rem" height="3.5rem" padding=".5rem 0 0 1rem">
          <Input
            placeholder="상품명을 입력해주세요."
            width="90%"
            height="80%"
            padding=".5rem"
          />
        </Grid>
        <Grid
          bg={bg.field}
          width="8.6rem"
          height="3.5rem"
          isFlex
          align="center"
          padding="0 0 0 .5rem"
        >
          <Text bold>상품 코드</Text>
        </Grid>
        <Grid width='20rem' isFlex align='center' padding='0 0 0 .5rem'>
          <Text>{PRODUCT_ID}</Text>
        </Grid>
      </Grid>
      <Grid isFlex borderBottom>
        <Grid width="8.6rem">
          <Grid
            bg={bg.field}
            height="3.5rem"
            isFlex
            align="center"
            padding="0 0 0 1rem"
          >
            <Text bold>상품 구성 소개 정보 *</Text>
          </Grid>
        </Grid>
        <Grid isFlex width="80%" height="3.5rem" padding=".5rem 0 0 1rem">
          <Input
            placeholder="상품 구성 소개 정보를 입력해주세요."
            width="90%"
            height="80%"
            padding=".5rem"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ProductName;
