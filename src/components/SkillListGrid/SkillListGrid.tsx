import React from 'react';
import { SkillItemInfo } from '../ListSkillItem/skillItemData';
import { Grid, List, Typography } from '@mui/material';
import ListSkillItem from '../ListSkillItem/ListSkillItem';

interface SkillListGridProps {
  /**
   * Passed to the children prop of the heading element
   */
  headingText: string;
  skillItems: SkillItemInfo[];
}

export const SkillListGrid: React.FC<SkillListGridProps> = ({
  headingText,
  skillItems
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Typography variant='h4' fontSize={22}>
        {headingText}
      </Typography>
      <List>
        {skillItems.map((info) => (
          <ListSkillItem key={info.primaryText} {...info} />
        ))}
      </List>
    </Grid>
  );
};
