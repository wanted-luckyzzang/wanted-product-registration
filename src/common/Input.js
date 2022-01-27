import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { width, padding, margin, type, checked, placeholder, none, multiple, onChange } = props;

  const styles = {
    width,
    padding,
    margin,
  };

  return (
    <ElInput {...styles} type={type} checked={checked} placeholder={placeholder} none={none} multiple={multiple} onChange={onChange} />
  );
};

Input.defaultProps = {
  width: '100%',
  padding: '',
  margin: '0',
  checked: false,
  placeholder: '',
  none: false,
  multiple: false,
  _onChange: () => {},
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: 1px solid #ebebeb;
  border-radius: 4px;
  ${(props) => (props.none ? 'display: none;' : '')}
`;

export default Input;
