import React, { useState } from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import styled from 'styled-components';
import 'App.css';
import Checkbox from 'common/Checkbox';

function App() {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <>
      <GlobalStyle />
      <Checkbox checked={checked} _onChange={() => setChecked(!checked)} />
    </>
  );
}

export default App;

const Input = styled.input``;
