import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Category } from "components/Category";
import "styles/App.css";
import FilterTag from "components/Filtertag";

function App() {
  return (
    <>
      <GlobalStyle />
      <FilterTag />
    </>
  );
}

export default App;
