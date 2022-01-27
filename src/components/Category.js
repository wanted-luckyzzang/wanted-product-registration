import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Text } from 'common';
import { border } from 'styles/palette';

export const Category = (props) => {
  return (
    <Grid padding='30px' margin='20px 20px 20px' border={border.primary} isFlex justify='space-between'>
      content
      <Text size='14px' bold>
        상품 기본 정보
      </Text>
      <div>content</div>
    </Grid>
  );
};
