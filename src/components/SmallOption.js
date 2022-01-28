import React from 'react';
import { Button, Grid, Input, Text } from 'common';
import styled from 'styled-components';

const SmallOption = ({ optionDelete }) => {
  return (
    <Grid border column>
      <Grid isFlex justify="flex-end">
        <Button width="5rem" border type="button" _onClick={optionDelete}>
          삭제
        </Button>
      </Grid>

      <Grid padding="0 1rem 0 1rem">
        <Input
          placeholder="   옵션명을 입력해 주세요.(필수)"
          height="2.5rem"
          width="100%"
          margin="0 0 1rem 0"
        />
      </Grid>

      <Grid isFlex align="center" padding="0 1rem 0 1rem">
        <Input
          placeholder="상품 정상가 (필수)"
          height="2.5rem"
          width="15rem"
          margin="0 1rem 0 0"
          textAlign="center"
        />

        <Text margin="0 1rem 0 0" size="1rem">
          원
        </Text>

        <Text margin="0 1rem 0 0" size="1rem">
          할인율 %
        </Text>

        <Input
          placeholder="상품 판매가 (필수)"
          height="2.5rem"
          width="15rem"
          margin="0 1rem 0 1rem"
          textAlign="center"
        />
        <Text margin="0 1rem 0 0">원</Text>
        <Input
          placeholder="재고 (필수)"
          height="2.5rem"
          width="15rem"
          margin="0 1rem 0 1rem"
          textAlign="center"
        />
        <Text margin="0 1rem 0 0">개</Text>

        <Select style={{ marginLeft: '1rem', height: '2,5rem', width: '5rem' }}>
          <option value="taxation">과세</option>
          <option value="nonTaxable">비과세</option>
        </Select>
      </Grid>

      <Grid isFlex align="center" padding="1rem">
        <Grid
          radius="8px"
          border="black"
          width="2rem"
          isFlex
          justify="center"
          align="center"
          height="2rem"
          margin="0 1rem 0 0"
        >
          <Text size="2rem">+</Text>
        </Grid>
        <Text>추가 옵션 상품 추가</Text>
      </Grid>
    </Grid>
  );
};

const Select = styled.select`
  width: 5rem;
  height: 1.5rem;
`;

export default React.memo(SmallOption);
