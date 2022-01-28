import React, { useState, useCallback } from 'react';
import { Grid, Text, Button } from 'common';
import { bg, border } from 'styles/palette';
import CATEGORY from 'utils/categoryData';

const Category = () => {
  const [selectedTag, setSelectedTag] = useState([]);

  const checkHandler = useCallback(
    (e) => {
      if (e.target.checked && !selectedTag.includes(e.target.value)) {
        setSelectedTag([...selectedTag, e.target.value]);
      }
    },
    [selectedTag, setSelectedTag]
  );

  const onDeleteTag = useCallback(
    (deleteTag) => {
      setSelectedTag(selectedTag.filter((tag) => deleteTag !== tag));
    },
    [selectedTag]
  );

  return (
    <Grid isFlex column borderBottom>
      <Grid isFlex height="20rem">
        <Grid width="10rem" bg={bg.field} padding="1rem 0 0 1rem">
          카테고리 *
        </Grid>
        <Grid isFlex padding="0.8rem">
          <Grid
            width="50%"
            border
            padding="0.8rem 1.2rem"
            margin="0 1rem 0 0"
            scrollY
          >
            {CATEGORY.map((item, idx) => {
              return (
                <Grid key={idx} isFlex align="center" margin="0 0 0.6rem">
                  <input
                    id="check"
                    type="checkbox"
                    value={item}
                    onChange={(e, item) => checkHandler(e, item)}
                  />
                  {item}
                </Grid>
              );
            })}
          </Grid>

          {selectedTag.length > 0 ? (
            <Grid width="50%" padding="0.8rem 1.2rem" border scrollY>
              {selectedTag.map((item, idx) => {
                return (
                  <Grid key={idx} isFlex align="center" margin="0 0 0.6rem">
                    <Button
                      _onClick={() => onDeleteTag(item)}
                      border={border.button}
                      bg={bg.category}
                    >
                      {item} X
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid
              width="50%"
              padding="0.8rem 1.2rem"
              border
              scrollY
              isFlex
              justify="center"
              align="center"
            >
              <Text>카테고리를 지정해주세요.</Text>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Category;
