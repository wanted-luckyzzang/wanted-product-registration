import React, { useCallback } from 'react';
import { Button, Grid } from 'common';
import { bg } from 'styles/palette';
import TAG_LIST from 'components/Filtertag/tagData';

const SearchTag = ({ selectedTag, setSelectedTag }) => {
  const addTag = useCallback(
    (event) => {
      const newTag = event.target.innerText;
      if (!selectedTag.includes(newTag))
        setSelectedTag([...selectedTag, event.target.innerText]);
    },
    [selectedTag, setSelectedTag]
  );

  return (
    <Grid isFlex isWrap width="100%" scrollY height="10rem">
      {TAG_LIST.sort().map((tag, idx) => (
        <Grid
          width="7rem"
          isFlex
          justify="center"
          margin="0 0 0 0.3rem"
          key={idx}
        >
          <Button height="2.3rem" bg={bg.tag} _onClick={addTag}>
            {tag}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(SearchTag);
