import React from 'react';
import styled from 'styled-components';

const Checkbox = (props) => {
  const { _onClick } = props;

  return <Checkedbox onClick={_onClick} />;
};

Checkbox.defaultProps = {
  type: 'checkbox',
  checked: false,
  _onChange: () => {},
};

const Checkedbox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.6rem;
  border: 1px solid #8e8e8e;
  cursor: pointer;
  background: indigo;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Checkbox;
