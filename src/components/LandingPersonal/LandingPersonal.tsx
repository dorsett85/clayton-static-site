import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid, Typography, styled } from '@mui/material';
import { LandingSection } from '../LandingSection/LandingSection';

const ImageWrapper = styled('div')`
  box-shadow: 0 0 1px #373737;
`;

const LandingModalPersonal: React.FC = () => {
  return (
    <LandingSection id='personal' headingText="When I'm not working...">
      <Typography fontSize={20} mb={3}>
        I grew up in beautiful southern Vermont and continue to enjoy all things active
        and outdoors. When I&apos;m not developing you can find me on a mountain climbing
        or snowboarding.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ImageWrapper>
                <StaticImage
                  src='../../assets/img/snowboarding-weehauken.jpg'
                  width={700}
                  alt='snowboarding weehauken'
                />
              </ImageWrapper>
            </Grid>
            <Grid item xs={12}>
              <StaticImage
                src='../../assets/img/climbing-eldo.jpg'
                width={700}
                alt='climbing eldo'
              />
            </Grid>
            <Grid item xs={12}>
              <StaticImage
                src='../../assets/img/climbing-silverton.jpg'
                width={700}
                alt='climbing silverton'
              />
            </Grid>
            <Grid item xs={12}>
              <StaticImage
                src='../../assets/img/climbing-tahoe.jpg'
                width={700}
                alt='climbing tahoe'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <StaticImage
                src='../../assets/img/climbing-rumney.jpg'
                width={550}
                alt='climbing rumney'
              />
            </Grid>
            <Grid item xs={12}>
              <StaticImage
                src='../../assets/img/climbing-tetons.jpg'
                width={550}
                alt='climbing tetons'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LandingSection>
  );
};

export default LandingModalPersonal;
