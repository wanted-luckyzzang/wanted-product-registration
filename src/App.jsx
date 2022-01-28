import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BasicInfo, ProductsPeriodSetting, ProductNoticeInfo } from 'pages';
import 'styles/App.css';
import { Layout, FilterTag, ImageUpload } from 'components';

function App() {
  return (
    <Layout>
      <Routes>
        {/* <Route path='/' element={<SalesPeriodSetting />} /> */}
        <Route path='/basicinfo' element={<BasicInfo />} />
        <Route path='/noticeInfo' element={<ProductNoticeInfo />} />
      </Routes>
    </Layout>
  );
}

export default App;
