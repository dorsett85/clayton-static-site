import React, { ReactElement, useState } from 'react';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import {
  CssBaseline,
  Grid,
  Typography,
  Button,
  createStyles,
  makeStyles,
  Divider,
  TextField,
  CircularProgress,
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  List,
  ListSubheader,
  Zoom
} from '@material-ui/core';
import LandingFab from '../LandingFab/LandingFab';

// Development modal media
import reactLogo from '../../assets/img/react-logo.png';
import materialUiLogo from '../../assets/img/material-ui-logo.png';
import bootstrapLogo from '../../assets/img/bootstrap-solid.svg';
import djangoLogo from '../../assets/img/django-logo-negative.png';
import nodeLogo from '../../assets/img/node-logo.png';
import laravelLogo from '../../assets/img/laravel-l-slant.png';
import postgresLogo from '../../assets/img/PostgreSQL-logo.png';
import mySqlLogo from '../../assets/img/mysql-logo.png';
import awsLogo from '../../assets/img/aws-logo.png';
import digitalOceanLogo from '../../assets/img/DigitalOcean-logo.png';
import quickModelScreen from '../../assets/img/quickmodel.png';
import reactSweeperScreen from '../../assets/img/reactSweeper.png';
import workoutTrackerScreen from '../../assets/img/workout-tracker.png';
import tripBuddyScreen from '../../assets/img/trip-buddy.png';
import emapScreen from '../../assets/img/emap.png';

// Visualization modal media
import quickModelVideo from '../../assets/img/quickmodel-vid.mp4';

// Personal media
import climbingTahoeScreen from '../../assets/img/climbing-tahoe.jpg';
import snowboardingVtScreen from '../../assets/img/snowboarding-vt.jpg';
import climbingTetonScreen from '../../assets/img/climbing-teton.jpg';
import LandingModal from '../LandingModal/LandingModal';
import Landing from '../Landing/Landing';
import ListSkillItem from '../ListSkillItem/ListSkillItem';

interface ModalInfo {
  title?: string;
  content?: ReactElement;
  prevModal: number;
  nextModal: number;
  name: string;
  btnIcon: JSX.Element;
}

const useStyles = makeStyles((theme) =>
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
    },
    tickerInputDiv: {
      display: 'inline-flex',
      flexWrap: 'wrap',
      alignItems: 'baseline'
    },
    chartProgressDiv: {
      height: 400,
      margin: theme.spacing(2)
    },
    chartDiv: {
      height: 400,
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    tahoeClimbingGrid: {
      marginTop: 1
    }
  })
);

/**
 * Handler for when a sample app card is clicked on
 */
const handleSampleAppClick = (url: string): void => {
  window.open(url, '_blank');
};

const modalInfo = [
  { name: 'Development', btnIcon: <BuildIcon /> },
  { name: 'Visualization', btnIcon: <TrendingUpIcon /> },
  { name: 'Personal', btnIcon: <PersonPinCircleIcon /> }
];

const Layout: React.FC<any> = (props) => {
  const classes = useStyles();
  const [modalNum, setModalNum] = useState<number>();

  const handleOnModalNumChange = (idx?: number): void => setModalNum(idx);

  // Populate modal object with a title and content
  let modal: ModalInfo | undefined = undefined;
  if (typeof modalNum === 'number') {
    modal = {
      ...modalInfo[modalNum],
      prevModal: modalNum === 0 ? modalInfo.length - 1 : modalNum - 1,
      nextModal: modalNum === modalInfo.length - 1 ? 0 : modalNum + 1
    };
    if (modal.name === 'Development') {
      modal.title = 'Software Development';
      modal.content = (
        <div>
          <Typography gutterBottom>
            Full-stack engineer with extensive production deployment experience. I have
            built and maintained applications utilizing the following technologies:
          </Typography>
          <Grid container justify='center' spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
              <List
                subheader={
                  <ListSubheader disableSticky>Frontend Frameworks</ListSubheader>
                }
              >
                <ListSkillItem
                  iconSrc={reactLogo}
                  iconAlt='react logo'
                  primaryText='React'
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
                subheader={
                  <ListSubheader disableSticky>Backend Frameworks</ListSubheader>
                }
              >
                <ListSkillItem
                  iconSrc={djangoLogo}
                  iconAlt='django logo'
                  primaryText='Python/Django'
                />
                <ListSkillItem
                  iconSrc={nodeLogo}
                  iconAlt='node logo'
                  primaryText='Node/Express'
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
                  iconSrc={mySqlLogo}
                  iconAlt='mySQL logo'
                  primaryText='MySQL'
                />
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <List subheader={<ListSubheader disableSticky>Web Services</ListSubheader>}>
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
        </div>
      );
    } else if (modal.name === 'Visualization') {
      modal.title = 'Data Visualization';
      modal.content = (
        <div>
          <Grid container>
            <Grid item xs={12}>
              <form className={classes.tickerInputDiv} onSubmit={props.makeChart}>
                <TextField
                  variant='standard'
                  label='Enter stock tickers'
                  placeholder='e.g., AAPL, GOOG'
                  helperText={props.tickerHelperText}
                  error={props.tickerInputError}
                  onInput={props.handleTextInput}
                />
                <Button type='submit' disabled={props.tickerDisabled}>
                  Update
                </Button>
              </form>
            </Grid>
          </Grid>
          {props.chartLoading && (
            <div className={classes.chartProgressDiv}>
              <CircularProgress size={50} />
            </div>
          )}
          <Zoom
            in
            onEntered={(): void => props.makeChart()}
            mountOnEnter
            unmountOnExit
            timeout={0}
          >
            <div>
              {!props.chartLoading && (
                <div id='stockChart' className={classes.chartDiv} />
              )}
            </div>
          </Zoom>
          <Divider />
          <Grid
            container
            justify='center'
            alignItems='center'
            className={classes.belowDivider}
            spacing={3}
          >
            <Grid item xs={12} sm={6}>
              <video className={classes.sampleMedia} playsInline muted autoPlay loop>
                <source src={quickModelVideo} type='video/mp4' />
              </video>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography gutterBottom>
                My programming life began with reporting and data visualization projects
                in R. Those fundamental skills have led to providing extensive data driven
                insight to stakeholders through technical visualizations.
              </Typography>
              <Typography>
                I now offer analytic applications with the following libraries:
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <List subheader={<ListSubheader disableSticky>Javascript</ListSubheader>}>
                <ListSkillItem
                  primaryText='Highcharts'
                  secondaryText='See example above'
                />
                <ListSkillItem primaryText='Mapbox' />
                <ListSkillItem primaryText='Chart.js' />
                <ListSkillItem primaryText='Plotly' />
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <List subheader={<ListSubheader disableSticky>R</ListSubheader>}>
                <ListSkillItem iconComponentColor='blue' primaryText='ggplot2' />
                <ListSkillItem iconComponentColor='blue' primaryText='Leaflet R' />
                <ListSkillItem iconComponentColor='blue' primaryText='R Markdown/Shiny' />
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <List subheader={<ListSubheader disableSticky>Python</ListSubheader>}>
                <ListSkillItem iconComponentColor='green' primaryText='Matplotlib' />
                <ListSkillItem iconComponentColor='green' primaryText='ReportLab' />
              </List>
            </Grid>
          </Grid>
        </div>
      );
    } else if (modal.name === 'Personal') {
      modal.title = 'Not Always Working...';
      modal.content = (
        <div>
          <Grid container justify='center'>
            <Grid item xs={12} sm={10} md={8} className={classes.tahoeClimbingGrid}>
              <img
                src={climbingTahoeScreen}
                className={classes.sampleMedia}
                alt='climbingTahoe'
              />
            </Grid>
          </Grid>
          <Typography gutterBottom className={classes.belowDivider}>
            I grew up in beautiful southern Vermont and continue to enjoy all things
            active and outdoors.
          </Typography>
          <Typography gutterBottom>
            When I&apos;m not developing you can probably find me on a mountain climbing
            or snowboarding.
          </Typography>
          <Grid
            container
            spacing={2}
            justify='space-around'
            className={classes.belowDivider}
          >
            <Grid item xs={12} sm={6}>
              <img
                src={snowboardingVtScreen}
                className={classes.sampleMedia}
                alt='snowboardingVt'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                src={climbingTetonScreen}
                className={classes.sampleMedia}
                alt='climbingTeton'
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  }

  return (
    <>
      <CssBaseline />
      <Landing modalInfo={modalInfo} onButtonClick={handleOnModalNumChange} />
      <LandingModal modal={modal} onModalChange={handleOnModalNumChange} />
      <LandingFab modalNum={modalNum} />
    </>
  );
};

export default Layout;
