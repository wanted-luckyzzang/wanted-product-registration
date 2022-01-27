import React from 'react';
import { Grid } from 'common';
import { bg } from 'styles/palette';
import TAG_LIST from 'components/Filtertag/tagData';

const SearchTag = () => {
  return (
    <Grid isFlex isWrap width="100%" scrollY height="10rem">
      {TAG_LIST.sort().map((tag) => (
        <Grid
          width="20%"
          isFlex
          justify="center"
          padding=".5rem 0"
          margin=".5rem"
          bg={bg.tag}
        >
          {tag}
        </Grid>
      ))}
    </Grid>
  );
};

export default SearchTag;
