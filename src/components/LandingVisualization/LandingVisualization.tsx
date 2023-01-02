import React from 'react';
import { Grid, Typography, styled } from '@mui/material';
import quickModelVideo from '../../assets/img/quickmodel-vid.mp4';
import { skillItemData } from '../ListSkillItem/skillItemData';
import { SkillListGrid } from '../SkillListGrid/SkillListGrid';
import { LandingSection } from '../LandingSection/LandingSection';
import { StockChart } from './StockChart';

const VisualizationVideo = styled('video')`
  width: 100%;
  box-shadow: 0 0 1px #373737;
`;

const LandingVisualization: React.FC = () => {
  return (
    <LandingSection id='data-visualization' headingText='Data Visualization'>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        direction='row-reverse'
        mt={1}
        mb={6}
        spacing={3}
      >
        <Grid item md={6}>
          <Typography fontSize={20} mb={2}>
            My programming life began with reporting and data visualization projects in R.
            Those fundamental skills have led to providing extensive data driven insight
            to stakeholders through technical visualizations.
          </Typography>
          <Typography fontSize={20}>Check your stocks in the example below!</Typography>
        </Grid>
        <Grid item md={6}>
          <VisualizationVideo playsInline muted autoPlay loop>
            <source src={quickModelVideo} type='video/mp4' />
          </VisualizationVideo>
        </Grid>
      </Grid>
      <StockChart />
      <Typography fontSize={20} mb={3}>
        Analytic applications are available with (but not limited to) the following
        libraries:
      </Typography>
      <Grid container spacing={2}>
        <SkillListGrid
          headingText='Javascript'
          skillItems={skillItemData.visualization.javascript}
        />
        <SkillListGrid
          headingText='Python'
          skillItems={skillItemData.visualization.python}
        />
        <SkillListGrid headingText='R' skillItems={skillItemData.visualization.r} />
      </Grid>
    </LandingSection>
  );
};

export default LandingVisualization;
