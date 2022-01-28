import React, { useState } from 'react';
import styled from 'styled-components';
import { Toggle } from 'common';

const TogglePage = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <Toggle isChecked={isChecked} handleToggle={handleToggle} />
    </>
  );
};

export default TogglePage;
