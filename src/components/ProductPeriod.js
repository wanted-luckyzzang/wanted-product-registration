import React from 'react';
import DateRangeInputPicker from 'utils/pickers/DateRangePicker';
import { Grid } from 'common';
import { bg } from 'styles/palette';

const ProductPeriod = ({
  type,
  setPeriod,
  selectedOption,
  selectBtnHandler,
}) => {
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

  let style = {
    marginBottom: '1rem',
  };
  return (
    <Grid isFlex height="13rem" borderBottom>
      <Grid width="10rem" borderRight padding="1rem 0 0 1rem" bg={bg.field}>
        {title}
      </Grid>
      <Grid width="50rem" borderRight isFlex column padding="1rem 0 0 1rem">
        <div style={style}>
          <input
            type="radio"
            value="noLimitForShowing"
            checked={selectedOption === 'noLimitForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label1}</label>
        </div>
        <div style={style}>
          <input
            type="radio"
            value="NoneForShowing"
            checked={selectedOption === 'NoneForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label2}</label>
        </div>
        <div style={style}>
          <input
            type="radio"
            value="setForShowing"
            checked={selectedOption === 'setForShowing'}
            onChange={selectBtnHandler}
          />
          <label>{label3}</label>
        </div>
        <DateRangeInputPicker setPeriod={setPeriod} />
      </Grid>
    </Grid>
  );
};

export default React.memo(ProductPeriod);
