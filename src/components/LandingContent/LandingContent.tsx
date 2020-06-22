import React from 'react';
import {
  Button,
  createStyles,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';
import { modalInfoList } from '../LandingModal/modalInfo';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@keyframes slideInDown': {
      from: {
        opacity: '0',
        transform: 'translateY(-200%)'
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)'
      }
    },
    '@keyframes zoomIn': {
      from: {
        opacity: '0',
        transform: 'scale(0)'
      },
      to: {
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    gridContainer: {
      height: '100%',
      padding: 20
    },
    centerGrid: {
      marginBottom: 40
    },
    headerGrid: {
      marginBottom: 32,
      opacity: '0',
      transform: 'translateY(-200%)',
      animation: '$slideInDown 0.5s ease-out 0.25s forwards'
    },
    headerText: {
      color: theme.palette.common.white,
      textShadow: '0 0 5px #000000',
      fontSize: 45,
      [theme.breakpoints.down('xs')]: {
        fontSize: 30
      }
    },
    subHeaderText: {
      color: theme.palette.common.white,
      textShadow: '0 0 5px #000000',
      fontSize: 22,
      [theme.breakpoints.down('xs')]: {
        fontSize: 18
      }
    },
    buttonGrid: {
      opacity: '0',
      transform: 'scale(0)',
      animation: '$zoomIn 0.5s ease-out 0.75s forwards'
    },
    modalOpenBtn: {
      backgroundColor: lightBlue[500],
      '&:hover': {
        backgroundColor: lightBlue[700]
      },
      color: theme.palette.common.white,
      fontWeight: 600
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
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      justify='center'
      className={classes.gridContainer}
      alignItems='center'
    >
      <Grid item sm={12} md={8} lg={6} className={classes.centerGrid}>
        <div className={classes.headerGrid}>
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
        </div>
        <Grid container spacing={2} className={classes.buttonGrid}>
          {modalInfoList.map((info, i) => (
            <Grid key={info.btnTxt} item xs={12} sm={4}>
              <Button
                fullWidth
                variant='contained'
                size={isXsScreen ? 'medium' : 'large'}
                onClick={(): void => onButtonClick(i)}
                startIcon={info.btnIcon}
                className={classes.modalOpenBtn}
              >
                {info.btnTxt}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingContent;
