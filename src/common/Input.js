import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { width, padding, margin, type, radio, checked, placeholder, onChange } = props;

  const styles = {
    width,
    padding,
    margin,
  };

  return <ElInput {...styles} radio={radio} type={type} checked={checked} placeholder={placeholder} onChange={onChange} />;
};

Input.defaultProps = {
  width: '100%',
  padding: '',
  margin: '0',
  checked: false,
  radio: false,
  placeholder: '',
  _onChange: () => {},
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: 1px solid #ebebeb;
`;

export default Input;
