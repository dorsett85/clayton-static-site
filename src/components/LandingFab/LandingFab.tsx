import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Fab, Popover, Avatar, Typography, styled } from '@mui/material';
import cpdHeadshot from '../../assets/img/cpd-headshot.jpg';

const POPOVER_ID = 'contact-popover';

const CpdFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
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

const LandingFab: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <CpdFab
        aria-describedby={POPOVER_ID}
        onClick={({ currentTarget }): void => setAnchorEl(currentTarget)}
      >
        <CpdAvatar src={cpdHeadshot} alt='Clayton headshot' />
      </CpdFab>
      <Popover
        id={POPOVER_ID}
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
        disableScrollLock
      >
        <ContactTextContainer>
          <Typography variant='subtitle1'>Contact for consulting</Typography>
          <Typography gutterBottom>claytonphillipsdorsett@gmail.com</Typography>
          <a
            href='https://github.com/dorsett85'
            target='_blank'
            rel='noopener noreferrer'
          >
            <StaticImage
              src='../../assets/img/GitHub-Mark-32px.png'
              placeholder='none'
              alt='github icon'
            />
          </a>
        </ContactTextContainer>
      </Popover>
    </>
  );
};

export default LandingFab;
