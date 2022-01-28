import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BasicInfo, TogglePage, ProductsPeriodSetting, ProductNoticeInfo } from 'pages';
import 'styles/App.css';
import { Layout, FilterTag, ImageUpload } from 'components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<TogglePage />} />
        {/* <Route path='/' element={<BasicInfo />} /> */}
        <Route path='/filtertag' element={<FilterTag />} />
        <Route path='/noticeInfo' element={<ProductNoticeInfo />} />
        <Route path='/imageupload' element={<ImageUpload />} />
      </Routes>
    </Layout>
  );
}

export default App;
