import React from 'react';
import LandingBackground from '../LandingBackground/LandingBackground';
import LandingContent from '../LandingContent/LandingContent';
import LandingDevelopment from '../LandingDevelopment/LandingDevelopment';
import { Container, Divider } from '@mui/material';
import LandingVisualization from '../LandingVisualization/LandingVisualization';
import LandingPersonal from '../LandingPersonal/LandingPersonal';
import { LandingFab } from '../LandingFab/LandingFab';

const Landing: React.FC = () => {
  return (
    <>
      <LandingBackground />
      <LandingContent />
      <Container maxWidth='lg'>
        <LandingDevelopment />
        <Divider />
        <LandingVisualization />
        <Divider />
        <LandingPersonal />
      </Container>
      <LandingFab />
    </>
  );
};

export default Landing;
