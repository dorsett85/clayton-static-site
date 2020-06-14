import React, { useState } from 'react';
import { createStyles, Fab, Popover, Theme, Zoom } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import cpdHeadshot from '../../assets/img/cpd-headshot.jpg';
import Typography from '@material-ui/core/Typography';
import githubIcon from '../../assets/img/GitHub-Mark-32px.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'absolute',
      bottom: 10,
      right: 10
    },
    cpdHeadshot: {
      borderRadius: 50,
      width: 52,
      height: 52
    },
    contactPopoverText: {
      textAlign: 'center',
      margin: theme.spacing(2)
    }
  })
);

interface ClaytonFabProps {
  modalNum: any;
}

const ClaytonFab: React.FC<ClaytonFabProps> = ({ modalNum }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <Zoom in={modalNum === undefined}>
      <div>
        <Fab
          aria-owns='contactPopover'
          className={classes.fab}
          onClick={({ currentTarget }): void => setAnchorEl(currentTarget)}
        >
          <Avatar src={cpdHeadshot} className={classes.cpdHeadshot} />
        </Fab>
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={(): void => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right'
          }}
        >
          <div className={classes.contactPopoverText}>
            <Typography variant='subtitle1'>Contact for consulting</Typography>
            <Typography gutterBottom>claytonphillipsdorsett@gmail.com</Typography>
            <a
              href='https://github.com/dorsett85'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={githubIcon} alt='github icon' />
            </a>
          </div>
        </Popover>
      </div>
    </Zoom>
  );
};

export default ClaytonFab;
