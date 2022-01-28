import React from 'react';
import styled from 'styled-components';
import { Grid } from 'common';

const Header = () => {
  return (
    <Grid borderBottom='1px solid #e3e3e3' position='sticky'>
      <LogoLeftHeader>
        <Img src='https://www.sirloin.co.kr/data/skin/front/sirloin_2_6_0v/img/sirloin/logo.png' />
      </LogoLeftHeader>
    </Grid>
  );
};

const LogoLeftHeader = styled.header`
  height: 3rem;
  width: 60rem;
  border-bottom: 1px solid #e3e3e3;
`;

const Img = styled.img`
  width: 8rem;
  padding: 0.5rem;
  margin-left: 1rem;
`;

export default Header;
