import React, { useCallback, useState } from 'react';
import { FooterBtn, ProductPeriod } from 'components';
import { Grid } from 'common';

const ProductsPeriodSetting = () => {
  const [selectedShowingOption, setSelectedShowingOption] = useState();
  const [selectedSellingOption, setSelectedSellingOption] = useState();
  const [showingPeriod, setShowingPeriod] = useState(null);
  const [sellingPeriod, setSellingPeriod] = useState(null);

  const selectShowingBtnHandler = useCallback((event) => {
    setSelectedShowingOption(event.target.value);
  }, []);

  const selectSellingBtnHandler = useCallback((event) => {
    setSelectedSellingOption(event.target.value);
  }, []);

  const result = useCallback(
    (state1, state2) => {
      const label1 = '상품 노출 기한';
      const label2 = '상품 판매 기한';
      switch (state1) {
        case 'noLimitForShowing':
          console.log(label1, ': 제한 없음');
          break;
        case 'NoneForShowing':
          console.log(label1, ': 미노출');
          break;
        case 'setForShowing':
          console.log(label1, ': 노출 기간 설정');
          console.log(label1, `: ${showingPeriod[0]} ~ ${showingPeriod[1]}`);
          break;
        default:
          console.log(label1, ': 선택하지 않음');
      }
      switch (state2) {
        case 'noLimitForShowing':
          console.log(label2, ': 제한 없음');
          break;
        case 'NoneForShowing':
          console.log(label2, ': 미판매');
          break;
        case 'setForShowing':
          console.log(label2, ': 판매 기간 설정');
          console.log(label2, `: ${sellingPeriod[0]} ~ ${sellingPeriod[1]}`);
          break;
        default:
          console.log(label2, ': 선택하지 않음');
      }
    },
    [showingPeriod, sellingPeriod]
  );

  return (
    <Grid border>
      <Grid width="60rem">
        <Grid
          height="2.5rem"
          isFlex
          align="center"
          borderBottom
          padding="0 0 0 1rem"
        >
          노출 및 판매기간 설정
        </Grid>
        <ProductPeriod
          setPeriod={setShowingPeriod}
          selectedOption={selectedShowingOption}
          selectBtnHandler={selectShowingBtnHandler}
        />
        <ProductPeriod
          type="product-sale"
          setPeriod={setSellingPeriod}
          selectedOption={selectedSellingOption}
          selectBtnHandler={selectSellingBtnHandler}
        />
        <FooterBtn
          params="basicinfo"
          func={result}
          arg1={selectedShowingOption}
          arg2={selectedSellingOption}
        />
      </Grid>
    </Grid>
  );
};

export default ProductsPeriodSetting;
