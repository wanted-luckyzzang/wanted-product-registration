import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const { width, padding, margin, type, checked, placeholder, none, multiple, _ref, _onChange, _onFocus, _onBlur, textIndent } = props;

  const styles = {
    width,
    padding,
    margin,
    none,
    textIndent,
  };

  return (
    <ElInput
      {...styles}
      type={type}
      checked={checked}
      placeholder={placeholder}
      ref={_ref}
      multiple={multiple}
      onChange={_onChange}
      onFocus={_onFocus}
      onBlur={_onBlur}
    />
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
  _ref: null,
  _onChange: () => {},
  _onFocus: () => {},
};

const ElInput = styled.input`
  width: ${(props) => props.width};
  height: 40px;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: 1px solid #ebebeb;
  border-radius: 4px;
  ${(props) => (props.none ? 'display: none;' : '')};
  ${(props) => (props.height ? `height: ${props.height};` : '40px')};
  ${(props) => `text-indent: ${props.textIndent};`};
`;

export default Input;
