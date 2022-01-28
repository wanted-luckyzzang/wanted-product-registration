import React from 'react';
import { Grid, Button, Text, Input } from 'common';
import NoticeInfo from '../components/NoticeInfo';

const ProductNoticeInfo = (props) => {
  return (
    <Grid width='60rem' isFlex>
      <Grid margin='1rem auto auto auto' border isFlex column>
        <Grid padding='0.5rem 1.5rem' height='2.5rem' isFlex align='center' borderBottom>
          상품 정보 고시
        </Grid>
        {/* 15번 상품 정보 고시 */}
        <NoticeInfo />
      </Grid>
    </Grid>
  );
};

export default ProductNoticeInfo;
