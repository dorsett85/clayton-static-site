import React from 'react';
import {
  createStyles,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import { blue, green, yellow } from '@material-ui/core/colors';
import AssessmentIcon from '@material-ui/icons/Assessment';

const useStyles = makeStyles(() =>
  createStyles({
    yellow: {
      color: yellow[500]
    },
    green: {
      color: green[500]
    },
    blue: {
      color: blue[500]
    }
  })
);

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
  const classes = useStyles();

  // If an iconSrc wasn't passed in then use the IconComponent prop
  const icon = !iconSrc ? (
    <IconComponent alt={iconAlt} className={classes[iconComponentColor]} />
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
