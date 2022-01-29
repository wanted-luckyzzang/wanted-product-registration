import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Grid, Text } from 'common';
import { bg, border } from 'styles/palette';

const FooterBtn = (props) => {
  const navigate = useNavigate();

  const footerType = props.type || 'non-first';

  const clickHandler = () => {
    const argLength = Object.keys(props).length - 2;
    switch (argLength) {
      case 0:
        props.func();
        break;
      case 1:
        props.func(props.arg1);
        break;
      case 2:
        props.func(props.arg1, props.arg2);
        break;
      case 5:
        props.func(props.arg1, props.arg2, props.arg3, props.arg4, props.arg5);
        break;
      default:
        return;
    }
  };

  return (
    <>
      {footerType === 'first' ? (
        <Grid isFlex justify="flex-end" width="auto">
          <Button
            width="10rem"
            height="3rem"
            margin="1rem 1rem 2rem 0"
            bg={bg.primary}
            _onClick={() => {
              navigate(`/${props.params}`);
              clickHandler();
            }}
          >
            <Text bold color="#fff">
              다음
            </Text>
          </Button>
        </Grid>
      ) : (
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
              navigate(`/${props.params}`);
              clickHandler();
            }}
          >
            <Text bold color="#fff">
              다음
            </Text>
          </Button>
        </Grid>
      )}
    </>
  );
};

export default React.memo(FooterBtn);
