import React from 'react';
import { makeStyles, createStyles, Grid, Typography } from '@material-ui/core';
import climbingTahoeScreen from '../../assets/img/climbing-tahoe.jpg';
import snowboardingVtScreen from '../../assets/img/snowboarding-vt.jpg';
import climbingTetonScreen from '../../assets/img/climbing-teton.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    belowDivider: {
      marginTop: 12
    },
    sampleMedia: {
      width: '100%',
      boxShadow: '0 0 1px #373737'
    },
    tahoeClimbingGrid: {
      marginTop: 1
    }
  })
);

const LandingModalPersonal: React.FC = () => {
  const classes = useStyles();

  return (
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
        I grew up in beautiful southern Vermont and continue to enjoy all things active
        and outdoors.
      </Typography>
      <Typography gutterBottom>
        When I&apos;m not developing you can probably find me on a mountain climbing or
        snowboarding.
      </Typography>
      <Grid container spacing={2} justify='space-around' className={classes.belowDivider}>
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
};

export default LandingModalPersonal;
