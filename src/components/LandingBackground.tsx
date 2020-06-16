import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { LandingBackgroundImageQuery } from '../../graphql-types';
import { FluidObject } from 'gatsby-image';

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      height: '100vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  })
);

export const landingBackgroundImageQuery = graphql`
  query LandingBackgroundImage {
    backgroundImage: file(relativePath: { eq: "snowbird-dark.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const LandingBackground: React.FC = ({ children }) => {
  const classes = useStyles();
  const { backgroundImage } = useStaticQuery<LandingBackgroundImageQuery>(
    landingBackgroundImageQuery
  );

  return (
    <BackgroundImage
      Tag='section'
      className={classes.background}
      fluid={backgroundImage?.childImageSharp?.fluid as FluidObject}
    >
      {children}
    </BackgroundImage>
  );
};

export default LandingBackground;
