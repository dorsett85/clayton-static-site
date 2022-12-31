import React, { useState } from 'react';
import { Fab, Popover, Avatar, Typography, styled } from '@mui/material';
import cpdHeadshot from '../../assets/img/cpd-headshot.jpg';
import githubIcon from '../../assets/img/GitHub-Mark-32px.png';

const AvatarFab = styled(Fab)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const CpdAvatar = styled(Avatar)`
  width: 52px;
  height: 52px;
  border-radius: 50px;
`;

const ContactTextContainer = styled('div')(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2)
}));

interface ClaytonFabProps {
  show: boolean;
}

const ClaytonFab: React.FC<ClaytonFabProps> = ({ show }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <div hidden={!show}>
      <AvatarFab
        aria-owns='contactPopover'
        onClick={({ currentTarget }): void => setAnchorEl(currentTarget)}
      >
        <CpdAvatar src={cpdHeadshot} alt='Clayton headshot' />
      </AvatarFab>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right'
        }}
      >
        <ContactTextContainer>
          <Typography variant='subtitle1'>Contact for consulting</Typography>
          <Typography gutterBottom>claytonphillipsdorsett@gmail.com</Typography>
          <a
            href='https://github.com/dorsett85'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={githubIcon} alt='github icon' />
          </a>
        </ContactTextContainer>
      </Popover>
    </div>
  );
};

export default ClaytonFab;
