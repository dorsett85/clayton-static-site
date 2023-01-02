import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface ListSkillItemProps {
  /**
   * Image element
   */
  icon: React.ReactElement;
  /**
   * Passed to "primary" property of a MUI ListItemText component
   */
  primaryText: string;
  /**
   * Passed to "secondary" property of a MUI ListItemText component
   */
  secondaryText?: string;
}

const ListSkillItem: React.FC<ListSkillItemProps> = ({
  icon,
  primaryText,
  secondaryText
}) => {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default ListSkillItem;
