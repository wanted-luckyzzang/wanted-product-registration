import React, { useState, useCallback } from 'react';
import { v1 } from 'uuid';
import { Grid, Text, Input } from 'common';
import { bg } from 'styles/palette';

const ProductInfo = ({ setProductInfo }) => {
  const PRODUCT_ID = v1();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [desc, setDesc] = useState('');

  const onChangeHandler = useCallback(
    (e) => {
      const infoList = {
        '상품명:': name,
        '상품 코드:': code,
        '상품 소개 정보:': desc,
      };

      setName(e.target.value);
      setCode(PRODUCT_ID);
      setDesc(e.target.value);

      setProductInfo(infoList);
    },
    [PRODUCT_ID, name, setName, code, setCode, desc, setDesc, setProductInfo]
  );

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
            value={name}
            _onChange={onChangeHandler}
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
        <Grid width="20rem" isFlex align="center" padding="0 0 0 .5rem">
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
            value={desc}
            _onChange={onChangeHandler}
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

export default ProductInfo;
