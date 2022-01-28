import React, { useState, useCallback } from 'react';
import { Grid, Checkbox, Text, Button, Tag } from 'common';
import { bg } from 'styles/palette';
import { Link } from 'react-router-dom';
import CATEGORY from 'utils/categoryData';

export const Category = (props) => {
  // const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = useCallback(
    (item, isChecked) => {
      if (isChecked) {
        checkedItems.add(item);
        setCheckedItems(checkedItems);
      } else if (!isChecked && checkedItems.has(item)) {
        checkedItems.delete(item);
        setCheckedItems(checkedItems);
      }
    },
    [checkedItems]
  );

  const checkHandler = useCallback(
    (e, item) => {
      setChecked(!checked);
      checkedItemHandler(item, e.target.checked);
    },
    [checked, checkedItemHandler]
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
                  {/* <Checkbox checked={bChecked} _onClick={checkHandler} /> */}
                  <input type='checkbox' checked={checked} onChange={checkHandler} />
                  <Text>{item}</Text>
                </Grid>
              );
            })}
          </Grid>

          <Grid width='14rem' border padding='0.8rem 1.2rem' scrollY>
            {CATEGORY.map((item, idx) => (
              <Grid key={idx} isFlex align='center' margin='0 0 0.6rem'>
                <Tag>{item}</Tag>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button>
        <Link to='/period'>다음</Link>
      </Button>
    </Grid>
  );
};
