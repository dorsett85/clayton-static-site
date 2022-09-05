import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { makeStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { PersonalImagesQuery } from '../../../graphql-types';

export const personalImagesQuery = graphql`
  query PersonalImages {
    climbingEldoImage: file(relativePath: { eq: "climbing-eldo.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    climbingSilvertonImage: file(relativePath: { eq: "climbing-silverton.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    climbingTahoeImage: file(relativePath: { eq: "climbing-tahoe.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snowboardingWeehaukenImage: file(relativePath: { eq: "snowboarding-weehauken.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    climbingRumneyImage: file(relativePath: { eq: "climbing-rumney.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    climbingTetonsImage: file(relativePath: { eq: "climbing-tetons.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    spacingAbove: {
      marginTop: theme.spacing(2)
    },
    sampleMedia: {
      width: '100%',
      boxShadow: '0 0 1px #373737'
    }
  })
);

const LandingModalPersonal: React.FC = () => {
  const classes = useStyles();
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
              <Img
                fluid={snowboardingWeehaukenImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
                alt='skiing jackson'
              />
            </Grid>
            <Grid item xs={12}>
              <Img
                fluid={climbingEldoImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
                alt='climbing eldo'
              />
            </Grid>
            <Grid item xs={12}>
              <Img
                fluid={climbingSilvertonImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
                alt='climbing silverton'
              />
            </Grid>
            <Grid item xs={12}>
              <Img
                fluid={climbingTahoeImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
                alt='climbing tahoe'
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Img
                fluid={climbingRumneyImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
                alt='climbing rumney'
              />
            </Grid>
            <Grid item xs={12}>
              <Img
                fluid={climbingTetonsImage?.childImageSharp?.fluid as FluidObject}
                className={classes.sampleMedia}
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
