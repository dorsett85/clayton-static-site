import React from 'react';

import Header from './Header';
import './layout.css';
import styled from 'styled-components';

const Main = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 24px 16px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
