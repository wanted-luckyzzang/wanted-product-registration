import React from 'react';
import styled from 'styled-components';

const Switch = (props) => {
  return (
    <ElSwitch>
      <input type='checkbox' />
      <Slider />
    </ElSwitch>
  );
};

const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #ccc;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: #fff;
  }
`;

const ElSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 auto;
  background: red;

  & input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      ${Slider}::before {
        transform: translateX(26px);
      }
    }
  }
`;

export default Switch;
