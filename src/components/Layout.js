import React from 'react';
import { Grid } from 'common';
import { Header, SubHeader, Navbar } from 'components';

const Layout = ({ children }) => {
  return (
    <Grid isFlex column>
      <Header />
      <Grid isFlex>
        <Navbar />
        <Grid isFlex column>
          <SubHeader />
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Layout;
