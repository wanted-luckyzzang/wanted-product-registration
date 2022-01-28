import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Switch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ElSwitch>
      <ToggleInput type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
      <Slider toggled={checked} />
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

    ${(props) =>
      props.toggled &&
      css`
        transform: translateX(26px);
      `}
  }
`;

const ElSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin: 0 auto;
  background: red;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export default Switch;
