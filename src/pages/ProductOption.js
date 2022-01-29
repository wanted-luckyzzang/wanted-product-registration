import { useState } from 'react';
import { BigOption, FooterBtn } from 'components';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Button, Text } from 'common';

const ProductOption = () => {
  const [option, setOption] = useState([]);
  const [optionSetData, setOptionSetData] = useState([]);

  const addOptionButton = () => {
    setOption((prev) => [
      ...prev,
      {
        key: uuidv4(),
      },
    ]);
    setOptionSetData((prev) => [...prev, '###############################']);
  };

  const optionSetDelete = (idx) => {
    setOption((prev) => {
      return [...prev].filter((_, elIdx) => {
        return elIdx !== idx;
      });
    });
  };

  const hanldeButton = () => {
    console.log(optionSetData);
  };

  return (
    <>
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
            border="#36306e"
            _onClick={addOptionButton}
            width="10rem"
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
          <Grid column bg="#efefef" padding="2rem 2rem 3rem 2rem">
            {option.map((el, idx) => (
              <Grid column key={el.key}>
                <Grid isFlex justify="flex-end" bg="#efefef">
                  <Button
                    bg="white"
                    border="#dc2b2c"
                    width="4.5rem"
                    height="2rem"
                    margin="0 0 1rem 0"
                    _onClick={() => optionSetDelete(idx)}
                  >
                    <Text size="0.8rem" color="#dc2b2c">
                      삭제
                    </Text>
                  </Button>
                </Grid>

                <BigOption setOptionSetData={setOptionSetData} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      <FooterBtn params="imageselect" func={hanldeButton} />
    </>
  );
};

export default ProductOption;
