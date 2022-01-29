import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Grid, Text } from 'common';
import { bg, border } from 'styles/palette';

const FooterBtn = ({ params, func = null, arg1 = null, arg2 = null }) => {
  const navigate = useNavigate();

  return (
    <Grid isFlex justify="flex-end" margin="1.5rem 0 2.5rem">
      <Button
        width="10rem"
        height="3rem"
        margin="0 1.5rem 0 0"
        border={border.primary}
        _onClick={() => navigate(-1)}
      >
        <Text bold>이전</Text>
      </Button>
      <Button
        width="10rem"
        height="3rem"
        margin="0 1.5rem 0 0"
        bg={bg.primary}
        _onClick={() => {
          navigate(`/${params}`);
          func && func(arg1, arg2);
        }}
      >
        <Text bold color="#fff">
          다음
        </Text>
      </Button>
    </Grid>
  );
};

export default FooterBtn;
