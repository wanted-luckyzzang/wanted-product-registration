import React, { useCallback } from 'react';
import { Button, Grid, Text } from 'common';
import { bg } from 'styles/palette';
import TAG_LIST from 'utils/tagData';

const SearchTag = ({
  searchWord,
  setSearchWord,
  selectedTag,
  setSelectedTag,
  inputRef,
}) => {
  let searchTagList = TAG_LIST;
  if (searchWord.length) {
    searchTagList = TAG_LIST.filter((tag) => tag.match(searchWord));
  }

  const addTag = useCallback(
    (event) => {
      const newTag = event.target.innerText;
      if (!selectedTag.includes(newTag))
        setSelectedTag([...selectedTag, newTag]);
      inputRef.current.value = '';
      setSearchWord('');
    },
    [selectedTag, setSelectedTag, setSearchWord, inputRef]
  );

  return (
    <Grid
      isFlex
      isWrap
      scrollY
      height="7rem"
      position="absolute"
      top="4rem"
      border
      padding=".5rem"
    >
      {searchTagList.sort().map((tag, idx) => (
        <Grid
          width="6.3rem"
          isFlex
          justify="center"
          margin="0 0 0 0.3rem"
          key={idx}
        >
          <Button
            height="2rem"
            bg={bg.tag}
            _onClick={addTag}
            border=""
            margin=".1rem 0"
          >
            {tag}
          </Button>
        </Grid>
      ))}
      {searchTagList.length === 0 && (
        <Grid isFlex justify="center" margin="0 0 0 0.3rem">
          <Grid padding="2.5rem 0 0 0" isFlex justify="center">
            <Text>검색 결과가 존재하지 않습니다.</Text>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default React.memo(SearchTag);
