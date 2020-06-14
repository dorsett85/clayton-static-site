import React from 'react';
import { Button, createStyles, Grid, Slide, Typography, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

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
      color: '#ffffff',
      textAlign: 'center',
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
      color: '#ffffff',
      textAlign: 'center',
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
  modalInfo: any[];
  /**
   * Handler when a landing button is clicked. The idx argument will set the correct
   * modal content to display.
   */
  onButtonClick: (idx: number) => void;
}

const LandingContent: React.FC<LandingContentProps> = ({ modalInfo, onButtonClick }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify='center'
      className={classes.gridContainer}
      alignItems='center'
    >
      <Grid item md={6} sm={9} xs={12} className={classes.centerGrid}>
        <Slide in direction='down'>
          <Grid container className={classes.headerGrid}>
            <Grid item xs={12}>
              <Typography className={classes.headerText}>
                Clayton Phillips-Dorsett
              </Typography>
              <Typography className={classes.subHeaderText}>
                Software Developer/Architect
              </Typography>
            </Grid>
          </Grid>
        </Slide>
        <Zoom in timeout={500}>
          <Grid container spacing={2}>
            {modalInfo.map((info, i) => (
              <Grid key={info.name} item sm={4} xs={12}>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={(): void => onButtonClick(i)}
                  startIcon={info.btnIcon}
                  className={classes.modalOpenBtn}
                >
                  {info.name}
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
