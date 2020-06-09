import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BuildIcon from '@material-ui/icons/Build';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import { Fab, Popover } from '@material-ui/core';
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemAvatar,
  ListItemText,
  Slide,
  Zoom,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Card, CardActionArea, CardHeader, CardContent } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { yellow, green, blue } from '@material-ui/core/colors';
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from '@material-ui/icons';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

// Landing page media
import cpdHeadshot from '../assets/img/cpd-headshot.jpg';
import githubIcon from '../assets/img/GitHub-Mark-32px.png';
import snowbirdBackground from '../assets/img/snowbird_dark.jpg';

// Development modal media
import reactLogo from '../assets/img/react-logo.png';
import materialUiLogo from '../assets/img/material-ui-logo.png';
import bootstrapLogo from '../assets/img/bootstrap-solid.svg';
import djangoLogo from '../assets/img/django-logo-negative.png';
import nodeLogo from '../assets/img/node-logo.png';
import laravelLogo from '../assets/img/laravel-l-slant.png';
import postgresLogo from '../assets/img/PostgreSQL-logo.png';
import mySqlLogo from '../assets/img/mysql-logo.png';
import awsLogo from '../assets/img/aws-logo.png';
import digitalOceanLogo from '../assets/img/DigitalOcean-logo.png';
import quickModelScreen from '../assets/img/quickmodel.png';
import reactSweeperScreen from '../assets/img/reactSweeper.png';
import workoutTrackerScreen from '../assets/img/workout-tracker.png';
import tripBuddyScreen from '../assets/img/trip-buddy.png';
import emapScreen from '../assets/img/emap.png';

// Visualization modal media
import quickModelVideo from '../assets/img/quickmodel-vid.mp4';

// Personal media
import climbingTahoeScreen from '../assets/img/climbing-tahoe.jpg';
import snowboardingVtScreen from '../assets/img/snowboarding-vt.jpg';
import climbingTetonScreen from '../assets/img/climbing-teton.jpg';

const styles = (theme) => ({
  background: {
    height: '100vh',
    backgroundImage: `url(${snowbirdBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  gridContainer: {
    height: '100%',
    padding: 20,
  },
  centerGrid: {
    marginBottom: 40,
  },
  headerGrid: {
    marginBottom: 20,
  },
  headerText: {
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '0 0 5px #000000',
    [theme.breakpoints.up('xs')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 45,
    },
  },
  subHeaderText: {
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '0 0 5px #000000',
    [theme.breakpoints.up('xs')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  modalOpenBtn: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
    color: theme.palette.common.white,
  },
  modalOpenBtnText: {
    paddingLeft: 10,
    color: theme.palette.common.white,
  },
  logoImg: {
    borderRadius: 5,
  },
  belowDivider: {
    marginTop: 12,
  },
  sampleAppContent: {
    padding: 5,
  },
  sampleAppHeader: {
    fontWeight: 1000,
  },
  sampleMedia: {
    width: '100%',
    boxShadow: '0 0 1px #373737',
  },
  tickerInputDiv: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'baseline',
  },
  chartProgressDiv: {
    height: 400,
    margin: theme.spacing.unit * 2,
  },
  chartDiv: {
    height: 400,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
  },
  yellow: {
    color: yellow[500],
  },
  green: {
    color: green[500],
  },
  blue: {
    color: blue[500],
  },
  tahoeClimbingGrid: {
    marginTop: 1,
  },
  fab: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cpdHeadshot: {
    borderRadius: 50,
    width: 52,
    height: 52,
  },
  contactPopoverText: {
    textAlign: 'center',
    margin: theme.spacing.unit * 2,
  },
});

// Modal transition component
function ModalTransition(props) {
  return <Slide direction='down' {...props} />;
}

const Layout = (props) => {
  const { classes } = props;
  const modalInfo = [
    { name: 'Development', btnIcon: <BuildIcon /> },
    { name: 'Visualization', btnIcon: <TrendingUpIcon /> },
    { name: 'Personal', btnIcon: <PersonPinCircleIcon /> },
  ];

  // Populate
  let modal = {
    ...modalInfo[props.modalNum],
    prevModal: props.modalNum === 0 ? modalInfo.length - 1 : props.modalNum - 1,
    nextModal: props.modalNum === modalInfo.length - 1 ? 0 : props.modalNum + 1,
  };
  if (modal.name === 'Development') {
    modal.title = 'Software Development';
    modal.content = (
      <div>
        <Typography gutterBottom>
          Full-stack engineer with extensive production deployment experience. I have
          built and maintained applications utilizing the following technologies:
        </Typography>
        <Grid container justify={'center'} spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <List
              subheader={<ListSubheader disableSticky>Frontend Frameworks</ListSubheader>}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={reactLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'React'} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={materialUiLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'Material-UI'} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={bootstrapLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'Bootstrap'} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List
              subheader={<ListSubheader disableSticky>Backend Frameworks</ListSubheader>}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={djangoLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'Python/Django'} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={nodeLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'Node/Express'} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={laravelLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'PHP/Laravel'} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Database</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={postgresLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'PostgreSQL'} />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={mySqlLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'MySQL'} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Web Services</ListSubheader>}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={awsLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText
                  primary={'Amazon Web Services'}
                  secondary={'EC2, S3, Lambda, Route 53, etc.'}
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={digitalOceanLogo} className={classes.logoImg} />
                </ListItemAvatar>
                <ListItemText primary={'Digital Ocean'} secondary={'Ubuntu'} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Grid container className={classes.belowDivider} spacing={8}>
          <Grid item xs={12}>
            <Typography variant={'h6'}>Sample Applications</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea
                onClick={() =>
                  props.handleAppClick('https://pymodel.cphillipsdorsett.com')
                }
              >
                <CardHeader
                  subheader={'QuickModel'}
                  classes={{ subheader: classes.sampleAppHeader }}
                />
                <CardContent className={classes.sampleAppContent}>
                  <img
                    src={quickModelScreen}
                    className={classes.sampleMedia}
                    alt={'QuickModel'}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea
                onClick={() => props.handleAppClick('https://emap.cphillipsdorsett.com')}
              >
                <CardHeader
                  subheader={'eMap (in development)'}
                  classes={{ subheader: classes.sampleAppHeader }}
                />
                <CardContent className={classes.sampleAppContent}>
                  <img src={emapScreen} className={classes.sampleMedia} alt={'eMap'} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea
                onClick={() =>
                  props.handleAppClick('https://reactsweeper.cphillipsdorsett.com')
                }
              >
                <CardHeader
                  subheader={'ReactSweeper'}
                  classes={{ subheader: classes.sampleAppHeader }}
                />
                <CardContent className={classes.sampleAppContent}>
                  <img
                    src={reactSweeperScreen}
                    className={classes.sampleMedia}
                    alt={'reactSweeper'}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea
                onClick={() =>
                  props.handleAppClick('https://workout-tracker.cphillipsdorsett.com')
                }
              >
                <CardHeader
                  subheader={'workout-tracker'}
                  classes={{ subheader: classes.sampleAppHeader }}
                />
                <CardContent className={classes.sampleAppContent}>
                  <img
                    src={workoutTrackerScreen}
                    className={classes.sampleMedia}
                    alt={'workout-tracker'}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardActionArea
                onClick={() =>
                  props.handleAppClick('https://trip-buddy.cphillipsdorsett.com')
                }
              >
                <CardHeader
                  subheader={'trip-buddy'}
                  classes={{ subheader: classes.sampleAppHeader }}
                />
                <CardContent className={classes.sampleAppContent}>
                  <img
                    src={tripBuddyScreen}
                    className={classes.sampleMedia}
                    alt={'trip-buddy'}
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  } else if (modal.name === 'Visualization') {
    const chartIcon = (color) => (
      <ListItemIcon>
        <AssessmentIcon className={classes[color]} />
      </ListItemIcon>
    );
    modal.title = 'Data Visualization';
    modal.content = (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <form className={classes.tickerInputDiv} onSubmit={props.makeChart}>
              <TextField
                variant={'standard'}
                label='Enter stock tickers'
                placeholder='e.g., AAPL, GOOG'
                helperText={props.tickerHelperText}
                error={props.tickerInputError}
                onInput={props.handleTextInput}
              />
              <Button type={'submit'} disabled={props.tickerDisabled}>
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
          onEntered={() => props.makeChart()}
          mountOnEnter
          unmountOnExit
          timeout={0}
        >
          <div>
            {!props.chartLoading && (
              <div id={'stockChart'} className={classes.chartDiv}></div>
            )}
          </div>
        </Zoom>
        <Divider />
        <Grid
          container
          justify={'center'}
          alignItems={'center'}
          className={classes.belowDivider}
          spacing={24}
        >
          <Grid item xs={12} sm={6}>
            <video className={classes.sampleMedia} playsInline muted autoPlay loop>
              <source src={quickModelVideo} type='video/mp4' />
            </video>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>
              My programming life began with reporting and data visualization projects in
              R. Those fundamental skills have led to providing extensive data driven
              insight to stakeholders through technical visualizations.
            </Typography>
            <Typography>
              I now offer analytic applications with the following libraries:
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Javascript</ListSubheader>}>
              <ListItem>
                {chartIcon('yellow')}{' '}
                <ListItemText primary={'Highcharts'} secondary={'See example above'} />
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Mapbox'} />
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Chart.js'} />
              </ListItem>
              <ListItem>
                {chartIcon('yellow')} <ListItemText primary={'Plotly'} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>R</ListSubheader>}>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'ggplot2'} />
              </ListItem>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'Leaflet R'} />
              </ListItem>
              <ListItem>
                {chartIcon('blue')} <ListItemText primary={'R Markdown/Shiny'} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <List subheader={<ListSubheader disableSticky>Python</ListSubheader>}>
              <ListItem>
                {chartIcon('green')} <ListItemText primary={'Matplotlib'} />
              </ListItem>
              <ListItem>
                {chartIcon('green')} <ListItemText primary={'ReportLab'} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    );
  } else if (modal.name === 'Personal') {
    modal.title = 'Not Always Working...';
    modal.content = (
      <div>
        <Grid container justify={'center'}>
          <Grid item xs={12} sm={10} md={8} className={classes.tahoeClimbingGrid}>
            <img
              src={climbingTahoeScreen}
              className={classes.sampleMedia}
              alt={'climbingTahoe'}
            />
          </Grid>
        </Grid>
        <Typography gutterBottom className={classes.belowDivider}>
          I grew up in beautiful southern Vermont and continue to enjoy all things active
          and outdoors.
        </Typography>
        <Typography gutterBottom>
          When I'm not developing you can probably find me on a mountain climbing or
          snowboarding.
        </Typography>
        <Grid
          container
          spacing={16}
          justify={'space-around'}
          className={classes.belowDivider}
        >
          <Grid item xs={12} sm={6}>
            <img
              src={snowboardingVtScreen}
              className={classes.sampleMedia}
              alt={'snowboardingVt'}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={climbingTetonScreen}
              className={classes.sampleMedia}
              alt={'climbingTeton'}
            />
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div id={'background'} className={classes.background}>
        <Grid
          container
          justify={'center'}
          className={classes.gridContainer}
          alignItems={'center'}
        >
          <Grid item md={6} sm={9} xs={12} className={classes.centerGrid}>
            <Slide in direction={'down'}>
              <Grid container className={classes.headerGrid}>
                <Grid item xs={12}>
                  <Typography className={classes.headerText}>
                    Clayton Phillips-Dorsett
                  </Typography>
                  <Typography className={classes.subHeaderText}>
                    Software Developer
                  </Typography>
                </Grid>
              </Grid>
            </Slide>
            <Zoom in timeout={500}>
              <Grid container spacing={8}>
                {modalInfo.map((info, i) => (
                  <Grid key={i} item sm={4} xs={12}>
                    <Button
                      fullWidth
                      variant={'contained'}
                      onClick={() => props.handleToggleModal(i)}
                      // color={"default"}
                      className={classes.modalOpenBtn}
                    >
                      {info.btnIcon}
                      <Typography className={classes.modalOpenBtnText}>
                        {info.name}
                      </Typography>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Zoom>
          </Grid>
        </Grid>
        <Dialog
          open={Boolean(modal.name)}
          fullWidth
          fullScreen={window.innerWidth < 600}
          maxWidth={'md'}
          TransitionComponent={ModalTransition}
          onClose={() => props.handleToggleModal(null)}
        >
          <DialogTitle>{modal.title || ''}</DialogTitle>
          <DialogContent>{modal.content}</DialogContent>
          <DialogActions>
            <Button
              onClick={() => props.handleToggleModal(modal.prevModal)}
              color='primary'
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              onClick={() => props.handleToggleModal(modal.nextModal)}
              color='primary'
            >
              <ArrowRightIcon />
            </Button>
            <Button onClick={() => props.handleToggleModal(null)} color='primary'>
              <CloseIcon />
            </Button>
          </DialogActions>
        </Dialog>
        <Zoom in={props.modalNum === null}>
          <div>
            <Fab
              aria-owns={'contactPopover'}
              className={classes.fab}
              onClick={props.handleFabClick}
            >
              <Avatar src={cpdHeadshot} className={classes.cpdHeadshot} />
            </Fab>
            <Popover
              open={Boolean(props.fabAnchorEl)}
              anchorEl={props.fabAnchorEl}
              onClose={() => props.handleFabClick()}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
            >
              <div className={classes.contactPopoverText}>
                <Typography variant={'subtitle1'}>Contact for consulting</Typography>
                <Typography gutterBottom>claytonphillipsdorsett@gmail.com</Typography>
                <a href={'https://github.com/dorsett85'} target={'_blank'}>
                  <img src={githubIcon} alt={'github icon'} />
                </a>
              </div>
            </Popover>
          </div>
        </Zoom>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(Layout);
