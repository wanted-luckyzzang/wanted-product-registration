import React from 'react';
import { Grid } from 'common';

const Layout = ({ children }) => {
  return (
    <Grid>
      {/* <Header /> */}
      {/* <Nav /> */}
      {children}
    </Grid>
  );
};

export default Layout;
