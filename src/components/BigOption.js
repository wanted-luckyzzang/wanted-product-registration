import React, { useCallback, useState } from 'react';
import SmallOption from './SmallOption';
import { v4 as uuidv4 } from 'uuid';
import { Button, Grid, Text, ImageUpload } from 'common';

const BigOption = ({ setOptionSetData }) => {
  const [option, setOption] = useState([
    {
      key: uuidv4(),
    },
  ]);

  const addOption = useCallback(() => {
    setOption((prev) => [
      ...prev,
      {
        key: uuidv4(),
      },
    ]);
  }, []);

  const optionDelete = useCallback((idx) => {
    setOption((prev) => {
      return [...prev].filter((_, elIdx) => {
        return elIdx !== idx;
      });
    });
  }, []);

  return (
    <Grid column border="#e3e3e3" padding="1rem" margin="0 0 1rem 0">
      <ImageUpload preview setOptionSetData={setOptionSetData} />
      {option.map((el, idx) => (
        <SmallOption
          key={el.key}
          setOptionSetData={setOptionSetData}
          optionDelete={() => optionDelete(idx)}
        />
      ))}

      <Grid isFlex justify="center" width="100%">
        <Button
          type="button"
          border="#36306e"
          width="100%"
          margin="1rem 0 0 0"
          _onClick={addOption}
        >
          <Text size="1rem">+ 옵션 추가</Text>
        </Button>
      </Grid>
    </Grid>
  );
};

export default BigOption;
