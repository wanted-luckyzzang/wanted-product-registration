import React from 'react';
import styled from 'styled-components';

const Checkbox = (props) => {
  const { width, padding, margin, checked, _onChange } = props;

  const styles = {
    width,
    padding,
    margin,
  };

  return (
    <CheckBoxContainer {...styles}>
      <HiddenCheckBox type='checkbox' checked={checked} onChange={_onChange} />
      <StyledCheckBox checked={checked}>
        <Icon viewBox='0 0 24 24'>
          <polyline points='19 7 10 17 5 12' />
        </Icon>
      </StyledCheckBox>
    </CheckBoxContainer>
  );
};

Checkbox.defaultProps = {
  width: '100%',
  padding: '',
  margin: '0',
  checked: false,
  radio: false,
  placeholder: '',
  onChange: () => {},
};

const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckBox = styled.div`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border: ${(props) => (props.checked ? 'none' : 'solid 0.1rem #dddddd')};
  background: ${(props) => (props.checked ? 'black' : 'white')};
  border-radius: 0.4rem;
  transition: all 150ms;
  margin-right: 0.8rem;
  cursor: pointer;

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`;

const HiddenCheckBox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default Checkbox;
