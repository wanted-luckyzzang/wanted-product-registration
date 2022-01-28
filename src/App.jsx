import React from "react";
import GlobalStyle from "styles/GlobalStyle";
import { Category } from "pages/Category";
import "styles/App.css";
import FilterTag from "components/Filtertag";
import ImageUpload from "pages/ImageUpload";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/filtertag" element={<FilterTag />} />
        <Route path="/imageupload" element={<ImageUpload />} />
      </Routes>
    </>
  );
}

export default App;
