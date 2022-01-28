import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BasicInfo, TogglePage } from 'pages';
import 'styles/App.css';
import { Layout } from 'components';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<TogglePage />} />
        {/* <Route path='/' element={<BasicInfo />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
