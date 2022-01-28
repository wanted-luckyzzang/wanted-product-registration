import React, { useState, useCallback } from 'react';
import { Grid, Text, Button, Tag } from 'common';
import { bg, border } from 'styles/palette';
import { Link } from 'react-router-dom';
import CATEGORY from 'utils/categoryData';
import { unstable_ClassNameGenerator } from '@mui/material';

export const Category = (props) => {
  const [selectedTag, setSelectedTag] = useState([]);

  const checkHandler = useCallback(
    (e) => {
      if (e.target.checked && !selectedTag.includes(e.target.value)) {
        setSelectedTag([...selectedTag, e.target.value]);
      }
    },
    [selectedTag, setSelectedTag]
  );

  console.log(selectedTag);

  const onDeleteTag = useCallback(
    (deleteTag) => {
      // console.log(e.target.innerText);
      setSelectedTag(selectedTag.filter((tag) => deleteTag !== tag));
    },
    [selectedTag]
  );

  return (
    <Grid width='45rem' margin='1rem auto' border isFlex column>
      <Grid height='3rem' isFlex align='center' borderBottom>
        <Text bold>상품 기본 정보</Text>
      </Grid>
      <Grid isFlex height='20rem'>
        <Grid width='12rem' borderRight bg={bg.category}>
          카테고리 *
        </Grid>
        <Grid isFlex padding='0.8rem'>
          <Grid width='18rem' height='14rem' border padding='0.8rem 1.2rem' margin='0 1rem 0 0' scrollY>
            {CATEGORY.map((item, idx) => {
              return (
                <Grid key={idx} isFlex align='center' margin='0 0 0.6rem'>
                  <input id='check' type='checkbox' value={item} onChange={(e, item) => checkHandler(e, item)} />
                  {item}
                </Grid>
              );
            })}
          </Grid>

          {selectedTag.length > 0 ? (
            <Grid width='13rem' padding='0.8rem 1.2rem' border scrollY>
              {selectedTag.map((item, idx) => {
                return (
                  <Grid key={idx} isFlex align='center' margin='0 0 0.6rem'>
                    <Button _onClick={() => onDeleteTag(item)}>{item}</Button>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid width='14rem' padding='0.8rem 1.2rem' border scrollY isFlex justify='center' align='center'>
              <Text>카테고리를 지정해주세요.</Text>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Button>
        <Link to='/period'>다음</Link>
      </Button>
    </Grid>
  );
};
