import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import {
  makeStyles,
  createStyles,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  ListSubheader,
  Typography
} from '@material-ui/core';
import ListSkillItem from '../ListSkillItem/ListSkillItem';
import reactLogo from '../../assets/img/react-logo.png';
import gatsbyLogo from '../../assets/img/gatsby-logo.png';
import materialUiLogo from '../../assets/img/material-ui-logo.png';
import bootstrapLogo from '../../assets/img/bootstrap-solid.svg';
import netCoreLogo from '../../assets/img/netcore-logo.png';
import nodeLogo from '../../assets/img/node-logo.png';
import djangoLogo from '../../assets/img/django-logo-negative.png';
import laravelLogo from '../../assets/img/laravel-logo.png';
import postgresLogo from '../../assets/img/postgresql-logo.png';
import firestoreLogo from '../../assets/img/Firestore-Logo.png';
import mongoDbLogo from '../../assets/img/MongoDB-Logo.png';
import mySqlLogo from '../../assets/img/mysql-logo.png';
import gcpLogo from '../../assets/img/gcp-logo.png';
import awsLogo from '../../assets/img/aws-logo.png';
import digitalOceanLogo from '../../assets/img/digital-ocean-logo.png';
import { SampleAppImagesQuery } from '../../../graphql-types';

export const sampleAppImagesQuery = graphql`
  query SampleAppImages {
    tripBuddyImage: file(relativePath: { eq: "trip-buddy.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    quickModelImage: file(relativePath: { eq: "quickmodel.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    eMapImage: file(relativePath: { eq: "emap.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    reactSweeperImage: file(relativePath: { eq: "reactSweeper.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    workoutTrackerImage: file(relativePath: { eq: "workout-tracker.png" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const useStyles = makeStyles(() =>
  createStyles({
    belowDivider: {
      marginTop: 12
    },
    sampleAppContent: {
      padding: 5
    },
    sampleAppHeader: {
      fontWeight: 1000
    },
    sampleMedia: {
      width: '100%',
      boxShadow: '0 0 1px #373737'
    }
  })
);

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
  imgFluid: FluidObject;
}

const GridSampleAppItem: React.FC<GridSampleAppItem> = ({
  externalUrl,
  name,
  imgFluid
}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea onClick={(): void => handleSampleAppClick(externalUrl)}>
          <CardHeader subheader={name} classes={{ subheader: classes.sampleAppHeader }} />
          <CardContent className={classes.sampleAppContent}>
            <Img fluid={imgFluid} className={classes.sampleMedia} alt={name} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const LandingModalDevelopment: React.FC = () => {
  const classes = useStyles();
  const {
    tripBuddyImage,
    quickModelImage,
    eMapImage,
    reactSweeperImage,
    workoutTrackerImage
  } = useStaticQuery<SampleAppImagesQuery>(sampleAppImagesQuery);

  return (
    <>
      <Typography gutterBottom>
        Full-stack engineer with extensive production deployment experience. I have built
        and maintained applications utilizing the following technologies:
      </Typography>
      <Grid container justify='center' spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <List
            subheader={<ListSubheader disableSticky>Frontend Frameworks</ListSubheader>}
          >
            <ListSkillItem iconSrc={reactLogo} iconAlt='react logo' primaryText='React' />
            <ListSkillItem
              iconSrc={gatsbyLogo}
              iconAlt='gatsby logo'
              primaryText='Gatsby'
            />
            <ListSkillItem
              iconSrc={materialUiLogo}
              iconAlt='material-ui logo'
              primaryText='Material-UI'
            />
            <ListSkillItem
              iconSrc={bootstrapLogo}
              iconAlt='bootstrap logo'
              primaryText='Bootstrap'
            />
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List
            subheader={<ListSubheader disableSticky>Backend Frameworks</ListSubheader>}
          >
            <ListSkillItem
              iconSrc={netCoreLogo}
              iconAlt='dotnet core logo'
              primaryText='C#/ASP.NET Core'
            />
            <ListSkillItem
              iconSrc={nodeLogo}
              iconAlt='node logo'
              primaryText='Node/Express'
            />
            <ListSkillItem
              iconSrc={djangoLogo}
              iconAlt='django logo'
              primaryText='Python/Django'
            />
            <ListSkillItem
              iconSrc={laravelLogo}
              iconAlt='laravel logo'
              primaryText='PHP/Laravel'
            />
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List subheader={<ListSubheader disableSticky>Database</ListSubheader>}>
            <ListSkillItem
              iconSrc={postgresLogo}
              iconAlt='postgreSQL logo'
              primaryText='PostgreSQL'
            />
            <ListSkillItem
              iconSrc={firestoreLogo}
              iconAlt='firestore logo'
              primaryText='Firestore'
            />
            <ListSkillItem
              iconSrc={mongoDbLogo}
              iconAlt='mongoDb logo'
              primaryText='MongoDB'
            />
            <ListSkillItem iconSrc={mySqlLogo} iconAlt='mySQL logo' primaryText='MySQL' />
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <List subheader={<ListSubheader disableSticky>Web Services</ListSubheader>}>
            <ListSkillItem
              iconSrc={gcpLogo}
              iconAlt='gcp logo'
              primaryText='Google Cloud Platform'
              secondaryText='GKE, GCS, GIP, Apigee, etc.'
            />
            <ListSkillItem
              iconSrc={awsLogo}
              iconAlt='aws logo'
              primaryText='Amazon Web Services'
              secondaryText='EC2, S3, Lambda, Route 53, etc.'
            />
            <ListSkillItem
              iconSrc={digitalOceanLogo}
              iconAlt='digital ocean logo'
              primaryText='Digital Ocean'
              secondaryText='Droplets'
            />
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Typography variant='h6' paragraph className={classes.belowDivider}>
        Sample Applications
      </Typography>
      <Grid container spacing={2}>
        <GridSampleAppItem
          externalUrl={'https://trip-buddy.cphillipsdorsett.com'}
          name={'trip-buddy'}
          imgFluid={tripBuddyImage?.childImageSharp?.fluid as FluidObject}
        />
        <GridSampleAppItem
          externalUrl={'https://pymodel.cphillipsdorsett.com'}
          name={'QuickModel'}
          imgFluid={quickModelImage?.childImageSharp?.fluid as FluidObject}
        />
        <GridSampleAppItem
          externalUrl={'https://emap.cphillipsdorsett.com'}
          name={'eMap'}
          imgFluid={eMapImage?.childImageSharp?.fluid as FluidObject}
        />
        <GridSampleAppItem
          externalUrl={'https://reactsweeper.cphillipsdorsett.com'}
          name={'ReactSweeper'}
          imgFluid={reactSweeperImage?.childImageSharp?.fluid as FluidObject}
        />
        <GridSampleAppItem
          externalUrl={'https://workout-tracker.cphillipsdorsett.com'}
          name={'workout-tracker'}
          imgFluid={workoutTrackerImage?.childImageSharp?.fluid as FluidObject}
        />
      </Grid>
    </>
  );
};

export default LandingModalDevelopment;
