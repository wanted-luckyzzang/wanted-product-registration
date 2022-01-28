import React from 'react';
import { Category, FilterTag } from 'components';
import ImageUpload from 'components/ImageUpload';
import { Grid, Input, Text } from 'common';
import { bg } from 'styles/palette';

const BasicInfo = (props) => {
  return (
    <>
      <Grid border>
        <Grid height='3rem' isFlex align='center' borderBottom>
          <Text bold>상품 기본 정보</Text>
        </Grid>

        <Category />

        <FilterTag />

        <Grid isFlex>
          <Grid width='12rem' bg={bg.field}>
            <Text bold>상품 구성 소개 정보 *</Text>
          </Grid>
          <Grid>
            <Input placeholder='상품 구성 소개 정보를 입력해 주세요.' />
          </Grid>
        </Grid>

        <ImageUpload />

        <Grid isFlex>
          <Grid width='12rem' bg={bg.field}>
            <Text bold>상품 총 재고 *</Text>
          </Grid>
          <Grid>
            <Text>100개</Text>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BasicInfo;
