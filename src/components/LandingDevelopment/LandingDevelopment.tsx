import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  styled,
  Typography
} from '@mui/material';
import { SkillListGrid } from '../SkillListGrid/SkillListGrid';
import { skillItemData } from '../ListSkillItem/skillItemData';
import { LandingSection } from '../LandingSection/LandingSection';

const SampleAppHeader = styled(CardHeader)`
  font-weight: 1000;
`;

const SampleAppContent = styled(CardContent)`
  padding: 5px;
`;

const SampleAppImageWrapper = styled('div')`
  box-shadow: 0 0 1px #373737;
`;

/**
 * Handler for when a sample app card is clicked on
 */
const handleSampleAppClick = (url: string): void => {
  window.open(url, '_blank');
};

interface GridSampleAppItem {
  /**
   * External url path
   */
  externalUrl: string;
  /**
   * Name of the app that will display as the card sub-header and alt attribute
   * for the image
   */
  name: string;
  /**
   * Fluid property from gql image query
   */
  image: React.ReactElement;
}

const sampleAppImageSize = {
  width: 600
};

const GridSampleAppItem: React.FC<GridSampleAppItem> = ({ externalUrl, name, image }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea onClick={() => handleSampleAppClick(externalUrl)}>
          <SampleAppHeader subheader={name} />
          <SampleAppContent>
            <SampleAppImageWrapper>{image}</SampleAppImageWrapper>
          </SampleAppContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const LandingDevelopment: React.FC = () => {
  return (
    <LandingSection id='software-development' headingText='Software Development'>
      <Typography fontSize={20} mb={3}>
        I am a full-stack engineer with extensive experience deploying, designing, and
        architecting enterprise level software. I have built and maintained applications
        utilizing the following technologies:
      </Typography>
      <Grid container justifyContent='center' spacing={1} rowSpacing={2}>
        <SkillListGrid
          headingText='Backend Frameworks'
          skillItems={skillItemData.development.backend}
        />
        <SkillListGrid
          headingText='Frontend Frameworks'
          skillItems={skillItemData.development.frontend}
        />
        <SkillListGrid
          headingText='Databases'
          skillItems={skillItemData.development.database}
        />
        <SkillListGrid
          headingText='Web Services'
          skillItems={skillItemData.development.cloud}
        />
      </Grid>
      <Typography variant='h3' mt={2} mb={2}>
        Sample Applications
      </Typography>
      <Grid container spacing={2}>
        <GridSampleAppItem
          externalUrl='https://trip-buddy.cphillipsdorsett.com'
          name='Trip Buddy'
          image={
            <StaticImage
              src='../../assets/img/trip-buddy.png'
              {...sampleAppImageSize}
              alt=''
            />
          }
        />
        <GridSampleAppItem
          externalUrl='https://quickmodel.cphillipsdorsett.com'
          name='Quick Model'
          image={
            <StaticImage
              src='../../assets/img/quickmodel.png'
              {...sampleAppImageSize}
              alt=''
            />
          }
        />
        <GridSampleAppItem
          externalUrl='https://emap.cphillipsdorsett.com'
          name='eMap'
          image={
            <StaticImage src='../../assets/img/emap.png' {...sampleAppImageSize} alt='' />
          }
        />
        <GridSampleAppItem
          externalUrl='https://team-sweeper.cphillipsdorsett.com'
          name='Team Sweeper'
          image={
            <StaticImage
              src='../../assets/img/team-sweeper.png'
              {...sampleAppImageSize}
              alt=''
            />
          }
        />
        <GridSampleAppItem
          externalUrl='https://workout-tracker.cphillipsdorsett.com'
          name='Workout Tracker'
          image={
            <StaticImage
              src='../../assets/img/workout-tracker.png'
              {...sampleAppImageSize}
              alt=''
            />
          }
        />
      </Grid>
    </LandingSection>
  );
};

export default LandingDevelopment;
