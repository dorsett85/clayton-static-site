import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid, Typography, styled } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { PersonalImagesQuery } from '../../../graphql-types';

export const personalImagesQuery = graphql`
  query PersonalImages {
    climbingEldoImage: file(relativePath: { eq: "climbing-eldo.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 450, layout: FULL_WIDTH)
      }
    }
    climbingSilvertonImage: file(relativePath: { eq: "climbing-silverton.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 450, layout: FULL_WIDTH)
      }
    }
    climbingTahoeImage: file(relativePath: { eq: "climbing-tahoe.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 450, layout: FULL_WIDTH)
      }
    }
    snowboardingWeehaukenImage: file(relativePath: { eq: "snowboarding-weehauken.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 450, layout: FULL_WIDTH)
      }
    }
    climbingRumneyImage: file(relativePath: { eq: "climbing-rumney.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 900, layout: FULL_WIDTH)
      }
    }
    climbingTetonsImage: file(relativePath: { eq: "climbing-tetons.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 900, layout: FULL_WIDTH)
      }
    }
  }
`;

const PersonalImage = styled(GatsbyImage)`
  width: 100%;
  box-shadow: 0 0 1px #373737;
`;

const LandingModalPersonal: React.FC = () => {
  const {
    climbingEldoImage,
    climbingSilvertonImage,
    climbingTahoeImage,
    snowboardingWeehaukenImage,
    climbingRumneyImage,
    climbingTetonsImage
  } = useStaticQuery<PersonalImagesQuery>(personalImagesQuery);

  return (
    <div>
      <Typography paragraph>
        I grew up in beautiful southern Vermont and continue to enjoy all things active
        and outdoors. When I&apos;m not developing you can find me on a mountain climbing
        or snowboarding.
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PersonalImage
                image={snowboardingWeehaukenImage?.childImageSharp?.gatsbyImageData}
                alt='skiing jackson'
              />
            </Grid>
            <Grid item xs={12}>
              <PersonalImage
                image={climbingEldoImage?.childImageSharp?.gatsbyImageData}
                alt='climbing eldo'
              />
            </Grid>
            <Grid item xs={12}>
              <PersonalImage
                image={climbingSilvertonImage?.childImageSharp?.gatsbyImageData}
                alt='climbing silverton'
              />
            </Grid>
            <Grid item xs={12}>
              <PersonalImage
                image={climbingTahoeImage?.childImageSharp?.gatsbyImageData}
                alt='climbing tahoe'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <PersonalImage
                image={climbingRumneyImage?.childImageSharp?.gatsbyImageData}
                alt='climbing rumney'
              />
            </Grid>
            <Grid item xs={12}>
              <PersonalImage
                image={climbingTetonsImage?.childImageSharp?.gatsbyImageData}
                alt='climbing tetons'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default LandingModalPersonal;
