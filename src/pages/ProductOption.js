import { Container, Text } from 'common';
import { Grid, Button, Input } from 'common';
import BigOption from 'components/BigOption';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { bg, text, border } from 'styles/palette';

const ProductOption = () => {
  const [option, setOption] = useState([]);

  const addOptionButton = () => {
    setOption((prev) => [
      ...prev,
      {
        key: uuidv4(),
      },
    ]);
  };

  const optionSetDelete = (idx) => {
    setOption((prev) => {
      return [...prev].filter((_, elIdx) => {
        return elIdx !== idx;
      });
    });
  };

  return (
    <Grid column>
      <Grid
        isFlex
        justify="space-between"
        align="center"
        border
        padding="0 0 0 1rem"
      >
        <Text size="1.7rem">상품 옵션*</Text>
        <Button
          height="4rem"
          bg="#fff"
          border="#352f6e"
          _onClick={addOptionButton}
          width="5rem"
        >
          <Text color="black" size="1rem">
            + 옵션 세트 추가
          </Text>
        </Button>
      </Grid>

      {option.length === 0 ? (
        <Grid height="20rem" bg="#efefef" isFlex justify="center">
          <Text margin="7rem 0 0 0">
            옵션세트를 추가하여 옵션을 구성해주세요.
          </Text>
        </Grid>
      ) : (
        <Grid column bg="#efefef" padding="3rem 2rem 3rem 2rem">
          {option.map((el, idx) => (
            <Grid column key={el.key}>
              <Grid isFlex justify="flex-end" bg="#efefef">
                <Button
                  bg="white"
                  border="#dc2b2c"
                  _onClick={() => optionSetDelete(idx)}
                >
                  <Text size="1.5rem" color="#dc2b2c">
                    삭제
                  </Text>
                </Button>
              </Grid>

              <BigOption />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
  );
};

export default ProductOption;
