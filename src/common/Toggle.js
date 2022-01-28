import React from 'react';
import styled from 'styled-components';

const Toggle = (props) => {
  const { isChecked } = props;

  return (
    <>
      <input type='checkbox' checked={isChecked} />
    </>
  );
};

export default Toggle;
