import React from 'react';
import ImageUpload from './ImageUpload';
import { Grid, Text } from 'common';
import { bg } from 'styles/palette';

const ProductImage = () => {
  return (
    <Grid isFlex borderBottom>
      <Grid width='8.6rem' bg={bg.field} height='3.5rem' isFlex align='center' padding='0 0 0 1rem'>
        <Text bold>상품 대표 이미지</Text>
      </Grid>
      <Grid isFlex width='20rem' height='3.5rem' padding='.5rem 0 0 1rem'>
        <ImageUpload />
      </Grid>
    </Grid>
  );
};

export default ProductImage;
