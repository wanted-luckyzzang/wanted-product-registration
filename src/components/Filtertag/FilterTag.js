import React, { useState } from 'react';
import { Grid, Button, Text } from 'common';
import { text } from 'styles/palette';
import Input from 'common/Input';
import { bg } from 'styles/palette';
import SearchTag from './SearchTag';

const FilterTag = () => {
  const [filterClick, setFilterClick] = useState(0);

  const test = (event) => {
    event.target.placeholder = '검색어를 입력하세요.';
    setFilterClick(1);
  };
  const test2 = (event) => {
    event.target.placeholder = '필터태그를 검색해 주세요.';
    setFilterClick(0);
  };

  return (
    <Grid width="40rem" margin="2rem auto 2rem" border isFlex column>
      <Grid height="5rem" isFlex align="center" borderBottom>
        상품 기본 정보
      </Grid>
      <Grid isFlex height="20rem">
        <Grid width="13rem" borderRight borderBottom>
          <Grid
            bg={bg.category}
            height="3.5rem"
            isFlex
            align="center"
            padding="0 0 0 .5rem"
          >
            <Text bold>필터 태그</Text>
          </Grid>
        </Grid>
        <Grid isFlex column>
          <Grid isFlex height="3.5rem" borderBottom padding=".5rem 0 0 0">
            <Input
              placeholder="필터태그를 검색해 주세요."
              width="80%"
              height="80%"
              padding=".5rem"
              _onFocus={test}
              _onBlur={test2}
            />
            <Button
              width="20%"
              height="80%"
              bg="#fff"
              border={text.dark}
              color={text.dark}
            >
              검색
            </Button>
          </Grid>
          {filterClick === 1 && <SearchTag />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterTag;
