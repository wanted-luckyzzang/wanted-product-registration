import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Button, Text } from 'common';
import { NoticeInfo, OfferThankCard, ProductShppingSetting, SaveMileage } from 'components/ProductNoticeInfo';

const ProductNoticeInfo = () => {
  const [noticeInfo, setNoticeInfo] = useState([
    {
      noticeInfo: uuidv4(),
    },
  ]);

  const AddNoticeInfoHandler = () => {
    setNoticeInfo((prev) => [
      ...prev,
      {
        key: uuidv4(),
      },
    ]);
  };

  const DeleteNoticeInfoHandler = (idx) => {
    setNoticeInfo((prev) => {
      return [...prev].filter((el, elIdx) => {
        return elIdx !== idx;
      });
    });
  };

  return (
    <Grid isFlex>
      <Grid border isFlex column>
        <Grid marginTop='2rem' border isFlex column border>
          <Grid border height='2.5rem' width='auto' margin='2rem 2rem 0 2rem'>
            <Text bold size='1rem' margin='0.5rem'>
              상품 정보 고시
            </Text>
          </Grid>
          <Grid bg='#d3d3d36b' height='auto' width='auto' margin='0 2rem' align='center' border>
            {/* 15번 상품 정보 고시 */}
            {noticeInfo.map((el, idx) => (
              <NoticeInfo DeleteNoticeInfoHandler={DeleteNoticeInfoHandler} key={el.key} idx={idx} />
            ))}
            <Grid wdith='95.2%' margin='0 auto'>
              <Button
                width='100%'
                bg='transparent'
                color='#352f6e'
                border='#352f6e'
                fontWeight='bold'
                _onClick={AddNoticeInfoHandler}
                margin='1rem 0'
                bold
              >
                + 정보고시 추가
              </Button>
            </Grid>
          </Grid>

          <Grid border borderBottom='transparent' height='2.5rem' width='auto' margin='2rem 2rem 0 2rem'>
            <Text bold size='1rem' margin='0.5rem'>
              상품 배송 설정
            </Text>
          </Grid>
          <Grid height='auto' width='auto' margin='0 2rem' align='center' border>
            {/* 16-18 상품 배송 설정 */}
            <ProductShppingSetting />
          </Grid>

          <Grid border borderBottom='transparent' height='2.5rem' width='auto' margin='2rem 2rem 0 2rem'>
            <Text bold size='1rem' margin='0.5rem'>
              상품 혜택 허용 설정
            </Text>
          </Grid>
          <Grid height='auto' width='auto' margin='0 2rem' align='center' border>
            {/* 19번 마일리지 적립 */}
            <SaveMileage />
          </Grid>

          <Grid border borderBottom='transparent' height='2.5rem' width='auto' margin='2rem 2rem 0 2rem'>
            <Text bold size='1rem' margin='0.5rem'>
              기타 설정
            </Text>
          </Grid>
          <Grid height='auto' width='auto' margin='0 2rem 2rem 2rem' align='center' border>
            {/* 20번 감사카드 제공 */}
            <OfferThankCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductNoticeInfo;
