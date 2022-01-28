import React from 'react';
import { Grid } from 'common';
import DateRangeInputPicker from 'utils/pickers/DateRangePicker';

const ProductPeriod = ({ type, selectedOption, selectBtnHandler }) => {
  let title, label1, label2, label3;
  switch (type) {
    case 'product-sale':
      title = '상품 판매 기한';
      label1 = '제한 없음';
      label2 = '미판매';
      label3 = '판매 기간 설정';
      break;
    default:
      title = '상품 노출 기한';
      label1 = '제한 없음';
      label2 = '미노출';
      label3 = '노출 기간 설정';
  }

  return (
    <Grid isFlex height="13rem" borderBottom>
      <Grid width="10rem" borderRight>
        {title}
      </Grid>
      <Grid width="50rem" borderRight isFlex column>
        <div>
          <input
            type="radio"
            value="noLimitForShowing"
            checked={selectedOption === 'noLimitForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label1}</label>
        </div>
        <div>
          <input
            type="radio"
            value="NoneForShowing"
            checked={selectedOption === 'NoneForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label2}</label>
        </div>
        <div>
          <input
            type="radio"
            value="setForShowing"
            checked={selectedOption === 'setForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label3}</label>
        </div>
        <DateRangeInputPicker />
      </Grid>
    </Grid>
  );
};

export default React.memo(ProductPeriod);
