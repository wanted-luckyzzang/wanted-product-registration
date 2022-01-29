import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { Grid, Button, Text } from 'common';
import {
  NoticeInfo,
  OfferThankCard,
  ProductShppingSetting,
  SaveMileage,
} from 'components/ProductNoticeInfo/index';
import { FooterBtn } from 'components';
import { bg } from 'styles/palette';
const ProductNoticeInfo = (props) => {
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

  console.log(props.params);
  return (
    <>
      <Grid isFlex>
        <Grid border isFlex column>
          <Grid marginTop="2rem" isFlex column gridType="form" return false>
            <Grid border height="2.5rem" width="auto" margin="2rem 2rem 0 2rem">
              <Text bold size="1rem" margin="0.5rem">
                상품 정보 고시
              </Text>
            </Grid>
            <Grid
              bg="#d3d3d36b"
              height="auto"
              width="auto"
              margin="0 2rem"
              align="center"
              border
            >
              {/* 15번 상품 정보 고시 */}
              {noticeInfo.map((el, idx) => (
                <NoticeInfo
                  DeleteNoticeInfoHandler={DeleteNoticeInfoHandler}
                  key={idx}
                  idx={idx}
                />
              ))}
              <Footer>
                <Button
                  width="100%"
                  bg="transparent"
                  color="#352f6e"
                  border="#352f6e"
                  fontWeight="bold"
                  _onClick={AddNoticeInfoHandler}
                  margin="1rem 0"
                  bold
                >
                  + 정보고시 추가
                </Button>
              </Footer>
            </Grid>
            <Grid
              border
              borderBottom="transparent"
              height="2.5rem"
              width="auto"
              margin="2rem 2rem 0 2rem"
            >
              <Text bold size="1rem" margin="0.5rem">
                상품 배송 설정
              </Text>
            </Grid>
            <Grid
              height="auto"
              width="auto"
              margin="0 2rem"
              align="center"
              border
            >
              {/* 16-18 상품 배송 설정 */}
              <ProductShppingSetting />
            </Grid>
            <Grid
              border
              borderBottom="transparent"
              height="2.5rem"
              width="auto"
              margin="2rem 2rem 0 2rem"
            >
              <Text bold size="1rem" margin="0.5rem">
                상품 혜택 허용 설정
              </Text>
            </Grid>
            <Grid
              height="auto"
              width="auto"
              margin="0 2rem"
              align="center"
              border
            >
              {/* 19번 마일리지 적립 */}
              <SaveMileage />
            </Grid>

            <Grid
              border
              borderBottom="transparent"
              height="2.5rem"
              width="auto"
              margin="2rem 2rem 0 2rem"
            >
              <Text bold size="1rem" margin="0.5rem">
                기타 설정
              </Text>
            </Grid>
            <Grid
              height="auto"
              width="auto"
              margin="0 2rem 2rem 2rem"
              align="center"
              border
            >
              {/* 20번 감사카드 제공 */}
              <OfferThankCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        isFlex
        justify="flex-end"
        margin="1rem 1rem 1rem 0"
        padding="0 0 1rem 0"
      >
        <Button
          width="10rem"
          height="3rem"
          margin="0 1.5rem 0 0"
          bg={bg.primary}
        >
          <Text bold color="#fff">
            제출하기
          </Text>
        </Button>
      </Grid>
    </>
  );
};

const Footer = styled.div`
  width: 95.2%;
  margin: 0 auto;
`;
export default ProductNoticeInfo;
