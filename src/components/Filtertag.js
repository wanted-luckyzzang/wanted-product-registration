import React from "react";
import { Grid, Button, Text } from "common";
import { text } from "styles/palette";
import Input from "common/Input";
import { bg } from "styles/palette";

const FilterTag = () => {
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
        <Grid isFlex height="3.5rem" borderBottom padding=".5rem 0 0 0">
          <Input
            placeholder="필터태그를 검색해 주세요."
            width="80%"
            height="80%"
            padding=".5rem"
          ></Input>
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
      </Grid>
    </Grid>
  );
};

export default FilterTag;
