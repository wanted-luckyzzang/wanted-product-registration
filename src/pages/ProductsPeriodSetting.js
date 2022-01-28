import React, { useCallback, useState } from 'react';
import { Grid, Button } from 'common';
import { useNavigate } from 'react-router';
import ProductPeriod from 'components/ProductPeriod';

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
    <Grid width="60rem" isFlex>
      <Grid height="2.5rem" isFlex align="center" borderBottom>
        노출 및 판매기간 설정
      </Grid>
      <ProductPeriod
        selectedOption={selectedShowingOption}
        selectBtnHandler={selectShowingBtnHandler}
      />
      <ProductPeriod
        type="product-sale"
        selectedOption={selectedSellingOption}
        selectBtnHandler={selectSellingBtngHandler}
      />
      <Button _onClick={() => navigate(`/category`)}>다음</Button>
    </Grid>
  );
};

export default ProductsPeriodSetting;
