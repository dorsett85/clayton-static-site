import React from 'react';
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
import tripBuddyScreen from '../../assets/img/trip-buddy.png';
import quickModelScreen from '../../assets/img/quickmodel.png';
import emapScreen from '../../assets/img/emap.png';
import reactSweeperScreen from '../../assets/img/reactSweeper.png';
import workoutTrackerScreen from '../../assets/img/workout-tracker.png';

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

const LandingModalDevelopment: React.FC = () => {
  const classes = useStyles();

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
      <Grid container className={classes.belowDivider} spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h6'>Sample Applications</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea
              onClick={(): void =>
                handleSampleAppClick('https://trip-buddy.cphillipsdorsett.com')
              }
            >
              <CardHeader
                subheader='trip-buddy'
                classes={{ subheader: classes.sampleAppHeader }}
              />
              <CardContent className={classes.sampleAppContent}>
                <img
                  src={tripBuddyScreen}
                  className={classes.sampleMedia}
                  alt='trip-buddy'
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea
              onClick={(): void =>
                handleSampleAppClick('https://pymodel.cphillipsdorsett.com')
              }
            >
              <CardHeader
                subheader='QuickModel'
                classes={{ subheader: classes.sampleAppHeader }}
              />
              <CardContent className={classes.sampleAppContent}>
                <img
                  src={quickModelScreen}
                  className={classes.sampleMedia}
                  alt='QuickModel'
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea
              onClick={(): void =>
                handleSampleAppClick('https://emap.cphillipsdorsett.com')
              }
            >
              <CardHeader
                subheader='eMap (in development)'
                classes={{ subheader: classes.sampleAppHeader }}
              />
              <CardContent className={classes.sampleAppContent}>
                <img src={emapScreen} className={classes.sampleMedia} alt='eMap' />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea
              onClick={(): void =>
                handleSampleAppClick('https://reactsweeper.cphillipsdorsett.com')
              }
            >
              <CardHeader
                subheader='ReactSweeper'
                classes={{ subheader: classes.sampleAppHeader }}
              />
              <CardContent className={classes.sampleAppContent}>
                <img
                  src={reactSweeperScreen}
                  className={classes.sampleMedia}
                  alt='reactSweeper'
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardActionArea
              onClick={(): void =>
                handleSampleAppClick('https://workout-tracker.cphillipsdorsett.com')
              }
            >
              <CardHeader
                subheader='workout-tracker'
                classes={{ subheader: classes.sampleAppHeader }}
              />
              <CardContent className={classes.sampleAppContent}>
                <img
                  src={workoutTrackerScreen}
                  className={classes.sampleMedia}
                  alt='workout-tracker'
                />
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingModalDevelopment;
