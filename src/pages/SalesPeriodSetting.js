import React, { useState } from 'react';
import styled from 'styled-components';
import { Grid, Button, Text, Input } from 'common';
import DateRangeInputPicker from 'utils/pickers/DateRangePicker';
import { useNavigate } from 'react-router';

export const SalesPeriodSetting = (props) => {
  const navigate = useNavigate();
  const [selectedShowingOption, setSelectedShowingOption] = useState();
  const [selectedSellingOption, setSelectedSellingOption] = useState();

  const SelectShowingBtnHandler = (e) => {
    setSelectedShowingOption(e.target.value);
  };
  const SelectSellingBtngHandler = (e) => {
    setSelectedSellingOption(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Grid width='60rem' margin='20px auto 20px' border isFlex column checkGrid='form' _onSubmit={submitHandler}>
      <Grid height='48px' isFlex align='center' borderBottom>
        노출 및 판매기간 설정
      </Grid>
      <Grid isFlex height='13rem' borderBottom='1px solid black'>
        <Grid width='10rem' borderRight>
          상품 노출 기한
        </Grid>
        <Grid width='50rem' borderRight isFlex column>
          <div>
            <input
              type='radio'
              value='noLimitForShowing'
              checked={selectedShowingOption === 'noLimitForShowing'}
              onChange={SelectShowingBtnHandler}
            />
            <label>제한 없음</label>
          </div>
          <div>
            <input
              type='radio'
              value='NoneForShowing'
              checked={selectedShowingOption === 'NoneForShowing'}
              onChange={SelectShowingBtnHandler}
            />
            <label>미노출</label>
          </div>
          <div>
            <input
              type='radio'
              value='setForShowing'
              checked={selectedShowingOption === 'setForShowing'}
              onChange={SelectShowingBtnHandler}
            />
            <label>노출 기간 설정</label>
          </div>
          <DateRangeInputPicker />
        </Grid>
      </Grid>
      <Grid isFlex height='13rem'>
        <Grid width='10rem' borderRight>
          상품 판매 기한
        </Grid>
        <Grid width='50rem' borderRight isFlex column>
          <div>
            <input
              type='radio'
              value='noLimitForSelling'
              checked={selectedSellingOption === 'noLimitForSelling'}
              onChange={SelectSellingBtngHandler}
            />
            <label>제한 없음</label>
          </div>
          <div>
            <input
              type='radio'
              value='NoneForSelling'
              checked={selectedSellingOption === 'NoneForSelling'}
              onChange={SelectSellingBtngHandler}
            />
            <label>미판매</label>
          </div>
          <div>
            <input
              type='radio'
              value='setForSelling'
              checked={selectedSellingOption === 'setForSelling'}
              onChange={SelectSellingBtngHandler}
            />
            <label>판매 기간 설정</label>
          </div>
          <DateRangeInputPicker />
          <button>저장하기</button>
        </Grid>
      </Grid>
      <Button
        onClick={() => {
          // navigate('/category');
        }}
      >
        다음
      </Button>
    </Grid>
  );
};
