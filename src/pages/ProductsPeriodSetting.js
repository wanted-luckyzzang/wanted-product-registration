import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { ProductPeriod } from 'components';
import { Grid, Button } from 'common';

const ProductsPeriodSetting = () => {
  const navigate = useNavigate();
  const [selectedShowingOption, setSelectedShowingOption] = useState();
  const [selectedSellingOption, setSelectedSellingOption] = useState();

  const selectShowingBtnHandler = useCallback((event) => {
    setSelectedShowingOption(event.target.value);
  }, []);

  const selectSellingBtngHandler = useCallback((event) => {
    setSelectedSellingOption(event.target.value);
  }, []);

  return (
    <Grid border>
      <Grid width='60rem'>
        <Grid height='2.5rem' isFlex align='center' borderBottom padding='0 0 0 1rem'>
          노출 및 판매기간 설정
        </Grid>
        <ProductPeriod selectedOption={selectedShowingOption} selectBtnHandler={selectShowingBtnHandler} />
        <ProductPeriod type='product-sale' selectedOption={selectedSellingOption} selectBtnHandler={selectSellingBtngHandler} />
        <Button _onClick={() => navigate(`/basicInfo`)}>다음</Button>
      </Grid>
    </Grid>
  );
};

export default ProductsPeriodSetting;
