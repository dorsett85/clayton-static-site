import React from 'react';
import Landing from '../components/Landing/Landing';
import Seo from '../components/Seo/Seo';

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo title={'Home'} />
      <Landing />
    </>
  );
};

export default IndexPage;
