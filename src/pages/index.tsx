import React from 'react';
import { CssBaseline } from '@mui/material';
import Landing from '../components/Landing/Landing';
import Seo from '../components/Seo/Seo';

const IndexPage: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Landing />
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <Seo title={'Home'} />;
};
