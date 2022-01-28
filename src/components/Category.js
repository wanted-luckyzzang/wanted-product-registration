import React, { useState, useCallback, useRef } from 'react';
import CATEGORY from 'utils/categoryData';
import { Grid, Text, Button } from 'common';
import { bg, border } from 'styles/palette';

const Category = () => {
  const [selectedTag, setSelectedTag] = useState([]);
  const inputRef = useRef(null);

  const onDeleteTag = useCallback(
    (deleteTag, e) => {
      setSelectedTag(selectedTag.filter((tag) => deleteTag !== tag));
      inputRef.current.querySelectorAll('input').forEach((el) => {
        if (el.value === e?.target.innerText.substring(0, e.target.innerText.length - 2)) {
          el.checked = false;
        }
      });
    },
    [selectedTag]
  );

  const checkHandler = useCallback(
    (e) => {
      if (e.target.checked && !selectedTag.includes(e.target.value)) {
        setSelectedTag([...selectedTag, e.target.value]);
      } else if (!e.target.checked && selectedTag.includes(e.target.value)) {
        const deleteTagId = selectedTag.indexOf(e.target.value);
        onDeleteTag(selectedTag[deleteTagId]);
      }
    },
    [selectedTag, setSelectedTag, onDeleteTag]
  );

  return (
    <Grid isFlex column borderBottom>
      <Grid isFlex height='20rem'>
        <Grid width='10rem' bg={bg.field} padding='1rem 0 0 1rem'>
          카테고리 *
        </Grid>
        <Grid isFlex padding='0.8rem'>
          <Grid width='50%' border padding='0.8rem 1.2rem' margin='0 1rem 0 0' _ref={inputRef} scrollY>
            {CATEGORY.map((item, idx) => {
              return (
                <Grid key={idx} isFlex align='center' margin='0 0 0.6rem'>
                  <input id='check' type='checkbox' value={item} onChange={checkHandler} />
                  {item}
                </Grid>
              );
            })}
          </Grid>

          {selectedTag.length > 0 ? (
            <Grid width='50%' padding='0.8rem 1.2rem' border scrollY>
              {selectedTag.map((item, idx) => {
                return (
                  <Grid key={idx} isFlex align='center' margin='0 0 0.6rem'>
                    <Button _onClick={(e) => onDeleteTag(item, e)} border={border.button} bg={bg.category}>
                      {item} X
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid width='50%' padding='0.8rem 1.2rem' border scrollY isFlex justify='center' align='center'>
              <Text>카테고리를 지정해주세요.</Text>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;
