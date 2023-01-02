import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface ListSkillItemProps {
  icon?: React.ReactElement;
  /**
   * Alt attribute for the icon
   */
  iconAlt?: string;
  /**
   * Src attribute for the icon if IconComponent is undefined
   */
  iconSrc?: string;
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
  iconSrc,
  iconAlt = 'assessment icon',
  primaryText,
  secondaryText
}) => {
  // If an iconSrc wasn't passed in then use the IconComponent prop
  const iconElement =
    icon || (iconSrc ? <img src={iconSrc} height={40} width={40} alt={iconAlt} /> : null);

  return (
    <ListItem>
      <ListItemIcon>{iconElement}</ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default ListSkillItem;
