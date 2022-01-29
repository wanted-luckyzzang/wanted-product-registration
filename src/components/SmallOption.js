import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Grid, Input, Text } from 'common';
import styled from 'styled-components';
import icon from 'assets/arrow.png';
import _ from 'lodash';

const SmallOption = ({ optionDelete, setOptionSetData }) => {
  const [option, setOption] = useState([]);

  const addOptionProductButton = () => {
    setOption((prev) => [
      ...prev,
      {
        key: uuidv4(),
      },
    ]);
  };

  const addOptionProductDelete = (idx) => {
    setOption((prev) => {
      return [...prev].filter((_, elIdx) => {
        return elIdx !== idx;
      });
    });
  };

  const getDebounceOptionName = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        optionName: data,
      },
    ]);
  }, 1000);

  const handleOptionName = (e) => {
    getDebounceOptionName(e.target.value);
  };

  const getDebouncNormalPrice = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        normalPrice: data,
      },
    ]);
  }, 1000);

  const handleNormalPrice = (e) => {
    getDebouncNormalPrice(e.target.value);
  };

  const getDebouncPrice = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        price: data,
      },
    ]);
  }, 1000);

  const handlePrice = (e) => {
    getDebouncPrice(e.target.value);
  };

  const getDebounceStock = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        stock: data,
      },
    ]);
  }, 1000);

  const handleStock = (e) => {
    getDebounceStock(e.target.value);
  };

  const getDebounceTax = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        tax: data,
      },
    ]);
  }, 1000);

  const handleTax = (e) => {
    getDebounceTax(e.target.value);
  };

  const getDebounceAddOptionName = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        addOptionName: data,
      },
    ]);
  }, 1000);

  const handleAddOptionName = (e) => {
    getDebounceAddOptionName(e.target.value);
  };

  const getDebounceAddOptionNormalPrice = _.debounce((data) => {
    setOptionSetData((prev) => [
      ...prev,
      {
        addOptionNormalPrice: data,
      },
    ]);
  }, 1000);

  const handleAddOptionNormalPrice = (e) => {
    getDebounceAddOptionNormalPrice(e.target.value);
  };
  return (
    <Grid border="#ececec" radius="0.3rem" column margin="1rem 0 0 0">
      <Grid isFlex justify="flex-end" padding="0 1rem 0 0">
        <Button
          border="#dc2b2c"
          width="3.3rem"
          height="2rem"
          type="button"
          _onClick={optionDelete}
          margin="1rem 0 1rem 0"
        >
          <Text color="#dc2b2c">삭제</Text>
        </Button>
      </Grid>

      <Grid padding="0 1rem 0 1rem">
        <Input
          placeholder="   옵션명을 입력해 주세요.(필수)"
          height="2.5rem"
          width="100%"
          margin="0 0 1rem 0"
          _onChange={handleOptionName}
        />
      </Grid>

      <Grid isFlex align="center" padding="0 1rem 0 1rem" margin="0 0 1rem 0">
        <Input
          placeholder="상품 정상가 (필수)"
          height="2.5rem"
          width="10rem"
          margin="0 1rem 0 0"
          textAlign="center"
          _onChange={handleNormalPrice}
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
          width="10rem"
          margin="0 1rem 0 1rem"
          textAlign="center"
          _onChange={handlePrice}
        />
        <Text margin="0 1rem 0 0">원</Text>
        <Input
          placeholder="재고 (필수)"
          height="2.5rem"
          width="10rem"
          margin="0 1rem 0 1rem"
          textAlign="center"
          _onChange={handleStock}
        />
        <Text margin="0 1rem 0 0">개</Text>

        <Select
          style={{ marginLeft: '1rem', height: '2,5rem', width: '5rem' }}
          onChange={handleTax}
        >
          <option value="taxation">과세</option>
          <option value="nonTaxable">비과세</option>
        </Select>
      </Grid>

      {option.map((el, idx) => (
        <Grid isFlex key={el.key} padding="0 1rem 0 2rem" align="center">
          <img
            src={icon}
            style={{ width: '2rem', height: '2rem' }}
            alt="picture1"
          />
          <Input
            placeholder="추가 옵션명 (필수)"
            height="2.5rem"
            width="22rem"
            margin="0 1rem 0 1rem"
            textAlign="center"
            _onChange={handleAddOptionName}
          />
          <Input
            placeholder="추가 옵션 정상가 (필수)"
            height="2.5rem"
            width="16rem"
            margin="0 1rem 0 1rem"
            textAlign="center"
            _onChange={handleAddOptionNormalPrice}
          />
          <Text margin="0 1rem 0 0" size="1rem">
            원
          </Text>
          <Button
            border="#dc2b2c"
            width="3.8rem"
            height="2.3rem"
            type="button"
            _onClick={() => addOptionProductDelete(idx)}
            margin="1rem 0 1rem 0"
          >
            <Text color="#dc2b2c">삭제</Text>
          </Button>
        </Grid>
      ))}

      <Grid isFlex align="center" padding="1rem">
        <Grid
          radius="8px"
          border="black"
          width="2rem"
          height="2rem"
          isFlex
          justify="center"
          align="center"
          margin="0 0.7rem 0 0"
          padding="0.2rem 0 0 0"
          cursor="pointer"
          _onClick={addOptionProductButton}
        >
          <Text size="1.5rem">+</Text>
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
