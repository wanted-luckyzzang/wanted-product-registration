import { Button, Grid, Text, ImageUpload } from 'common';
import SmallOption from './SmallOption';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useState } from 'react';

const BigOption = () => {
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
    <Grid column border="#e3e3e3" padding="1rem">
      <ImageUpload preview />
      {option.map((el, idx) => (
        <SmallOption key={el.key} optionDelete={() => optionDelete(idx)} />
      ))}

      <Grid isFlex justify="center" width="100%">
        <Button
          type="button"
          border="#363166"
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
