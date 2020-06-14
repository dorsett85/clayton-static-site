import React from 'react';
import { Button, createStyles, Grid, Slide, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { modalInfoList } from '../LandingModal/modalInfo';

const useStyles = makeStyles((theme) =>
  createStyles({
    gridContainer: {
      height: '100%',
      padding: 20
    },
    centerGrid: {
      marginBottom: 40
    },
    headerGrid: {
      marginBottom: 20
    },
    headerText: {
      color: theme.palette.common.white,
      textShadow: '0 0 5px #000000',
      fontSize: 45,
      [theme.breakpoints.down('sm')]: {
        fontSize: 40
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 30
      }
    },
    subHeaderText: {
      color: theme.palette.common.white,
      textShadow: '0 0 5px #000000',
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    },
    modalOpenBtn: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700]
      },
      color: theme.palette.common.white
    }
  })
);

interface LandingContentProps {
  /**
   * Handler when a landing button is clicked. The idx argument will set the correct
   * modal content to display.
   */
  onButtonClick: (idx: number) => void;
}

const LandingContent: React.FC<LandingContentProps> = ({ onButtonClick }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='center'
      className={classes.gridContainer}
      alignItems='center'
    >
      <Grid item xs={12} sm={9} md={6} className={classes.centerGrid}>
        <Slide in direction='down'>
          <Grid container className={classes.headerGrid}>
            <Grid item xs={12}>
              <Typography
                variant='h1'
                align='center'
                gutterBottom
                className={classes.headerText}
              >
                Clayton Phillips-Dorsett
              </Typography>
              <Typography variant='h2' align='center' className={classes.subHeaderText}>
                Software Developer/Architect
              </Typography>
            </Grid>
          </Grid>
        </Slide>
        <Zoom in timeout={500}>
          <Grid container spacing={2}>
            {modalInfoList.map((info, i) => (
              <Grid key={info.btnTxt} item xs={12} sm={4}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={(): void => onButtonClick(i)}
                  startIcon={info.btnIcon}
                  className={classes.modalOpenBtn}
                >
                  {info.btnTxt}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Zoom>
      </Grid>
    </Grid>
  );
};

export default LandingContent;
