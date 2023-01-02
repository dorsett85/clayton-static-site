import React from 'react';
import { Box, Typography } from '@mui/material';

interface LandingSectionProps extends React.PropsWithChildren {
  /**
   * Passed to the id attribute of the section element
   */
  id: string;
  /**
   * Passed to the children prop of the heading element
   */
  headingText: string;
}

export const LandingSection: React.FC<LandingSectionProps> = ({
  id,
  headingText,
  children
}) => {
  return (
    <Box id={id} component='section' sx={{ pt: 8, pb: 8 }}>
      <Typography variant='h2' mb={2}>
        {headingText}
      </Typography>
      {children}
    </Box>
  );
};
