import React, { useCallback, useRef, useState, useEffect } from 'react';
import SearchTag from './SearchTag';
import SelectedTag from './SelectedTag';
import { Grid, Button, Text, Input } from 'common';
import { bg, text } from 'styles/palette';

const FilterTag = ({ click }) => {
  const [tagClick, setTagClick] = useState(0);
  const [selectedTag, setSelectedTag] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    click && console.log('검색된 태그:', selectedTag);
  }, [click, selectedTag]);

  const focusInput = useCallback((event) => {
    event.target.placeholder = '검색어를 입력하세요.';
    setTagClick(1);
  }, []);

  const blurInput = useCallback((event) => {
    event.target.placeholder = '필터태그를 검색해 주세요.';
    setTimeout(() => {
      inputRef.current.value = '';
      setSearchWord('');
      setTagClick(0);
    }, 90);
  }, []);

  const changeInput = useCallback((event) => {
    setSearchWord(event.target.value);
  }, []);

  return (
    <Grid isFlex borderBottom>
      <Grid width='10rem'>
        <Grid bg={bg.field} height='3.5rem' isFlex align='center' padding='0 0 0 1rem'>
          <Text bold>필터 태그</Text>
        </Grid>
      </Grid>
      <Grid isFlex column position='relative'>
        <Grid isFlex height='3.5rem' padding='.5rem 0 0 1rem'>
          <Input
            placeholder='필터태그를 검색해 주세요.'
            width='80%'
            height='80%'
            padding='.5rem'
            _onFocus={focusInput}
            _onBlur={blurInput}
            _onChange={changeInput}
            _ref={inputRef}
          />
          <Button width='20%' height='80%' bg='#fff' border={text.dark} color={text.dark}>
            검색
          </Button>
        </Grid>
        {selectedTag.length !== 0 && <SelectedTag selectedTag={selectedTag} setSelectedTag={setSelectedTag} />}
        {tagClick === 1 && (
          <SearchTag
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            inputRef={inputRef}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default FilterTag;
