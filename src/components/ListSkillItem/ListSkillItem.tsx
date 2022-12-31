import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { blue, green, yellow } from '@mui/material/colors';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { ClassNames } from '@emotion/react';

const iconColors = {
  yellow: yellow[500],
  green: green[500],
  blue: blue[500]
};

interface ListSkillItemProps {
  /**
   * Alt attribute for the icon
   */
  iconAlt?: string;
  /**
   * Src attribute for the icon if IconComponent is undefined
   */
  iconSrc?: string;
  /**
   * Optional MUI icon component to use as the ListItemIcon child, otherwise
   * an "img" tag will be used with a set height/width.
   */
  IconComponent?: React.FC<{ alt: string; className: string }>;
  iconComponentColor?: 'yellow' | 'blue' | 'green';
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
  iconSrc,
  iconAlt = 'assessment icon',
  IconComponent = AssessmentIcon,
  iconComponentColor = 'yellow',
  primaryText,
  secondaryText
}) => {
  // If an iconSrc wasn't passed in then use the IconComponent prop
  const icon = !iconSrc ? (
    <ClassNames>
      {({ css }) => (
        <IconComponent
          alt={iconAlt}
          className={css({ color: iconColors[iconComponentColor] })}
        />
      )}
    </ClassNames>
  ) : (
    <img src={iconSrc} height={40} width={40} alt={iconAlt} />
  );

  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={primaryText} secondary={secondaryText} />
    </ListItem>
  );
};

export default ListSkillItem;
