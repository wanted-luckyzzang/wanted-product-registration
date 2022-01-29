import React, { useState, useCallback } from 'react';
import {
  Category,
  FilterTag,
  ProductInfo,
  ProductImage,
  ProductRest,
  FooterBtn,
} from 'components';
import { Grid, Text } from 'common';

const BasicInfo = () => {
  const [category, setCategory] = useState([]);
  const [filterTag, setFilterTag] = useState([]);
  const [productInfo, setProductInfo] = useState(null);
  const [productImage, setProductImage] = useState([]);
  const [productRest, setProductRest] = useState(0);

  const consoleResult = useCallback(() => {
    console.log('카테고리 태그: ', category);
    console.log('검색필터 태그: ', filterTag);
    console.log('상품 정보: ', productInfo);
    console.log('상품 대표 이미지: ', productImage);
    console.log('상품 총 재고: ', productRest);
  }, [category, filterTag, productInfo, productImage, productRest]);

  return (
    <>
      <Grid width="60rem" border>
        <Grid
          height="2.5rem"
          isFlex
          align="center"
          borderBottom
          padding="0 0 0 1rem"
        >
          <Text bold>상품 기본 정보</Text>
        </Grid>

        <Category setCategory={setCategory} />
        <FilterTag setFilterTag={setFilterTag} />
        <ProductInfo setProductInfo={setProductInfo} />
        <ProductImage setProductImage={setProductImage} />
        <ProductRest setProductRest={setProductRest} />
      </Grid>

      <FooterBtn
        params="productoption"
        func={consoleResult}
        arg1={category}
        arg2={filterTag}
        arg3={productInfo}
        arg4={productImage}
        arg5={productRest}
      />
    </>
  );
};

export default BasicInfo;
