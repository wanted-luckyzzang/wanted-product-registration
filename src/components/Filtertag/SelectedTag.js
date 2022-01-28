import React, { useCallback } from 'react';
import { Button, Grid, Text } from 'common';
import { bg } from 'styles/palette';

const SelectedTag = ({ selectedTag, setSelectedTag }) => {
  const removeTag = useCallback(
    (event) => {
      const tag = event.target.innerText.split(' ')[0];
      const newTagList = selectedTag.filter((e) => e !== tag);
      setSelectedTag(newTagList);
    },
    [selectedTag, setSelectedTag]
  );

  return (
    <Grid>
      <Grid padding="1rem 0 0 .5rem">
        <Text>지정된 필터 태그</Text>
      </Grid>
      <Grid isFlex isWrap width="100%">
        {selectedTag.map((tag, idx) => (
          <Grid
            width="5rem"
            isFlex
            justify="center"
            padding=".1rem 0"
            margin="0  .3rem"
            key={idx}
          >
            <Button bg={bg.tag} width="100%" height="2rem" _onClick={removeTag}>
              {`${tag} X`}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default React.memo(SelectedTag);
