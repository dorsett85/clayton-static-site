import React from 'react';
import { Assessment } from '@mui/icons-material';
import { blue, green, yellow } from '@mui/material/colors';
import { StaticImage } from 'gatsby-plugin-image';

const iconSize = {
  width: 40,
  height: 40
};

const iconColors = {
  yellow: yellow[500],
  green: green[500],
  blue: blue[500]
};

export interface SkillItemInfo {
  /**
   * Passed to "children" property of MUI ListItemIcon. Must be no bigger than
   * 40x40 pixels.
   */
  icon: React.ReactElement;
  /**
   * Passed to "primary" property of a MUI ListItemText
   */
  primaryText: string;
  /**
   * Passed to "secondary" property of a MUI ListItemText component
   */
  secondaryText?: string;
}

interface SkillItemData {
  development: {
    backend: SkillItemInfo[];
    frontend: SkillItemInfo[];
    database: SkillItemInfo[];
    cloud: SkillItemInfo[];
  };
  visualization: {
    javascript: SkillItemInfo[];
    python: SkillItemInfo[];
    r: SkillItemInfo[];
  };
}

const createSkillItemInfo = (
  icon: React.ReactElement,
  primaryText: string,
  secondaryText?: string
) => ({
  icon,
  primaryText,
  secondaryText
});

const createVisualizationItemInfo = (
  color: keyof typeof iconColors,
  primaryText: string,
  secondaryText?: string
) =>
  createSkillItemInfo(
    <Assessment htmlColor={iconColors[color]} />,
    primaryText,
    secondaryText
  );

export const skillItemData: SkillItemData = {
  development: {
    backend: [
      createSkillItemInfo(
        <StaticImage src='../../assets/img/spring-logo.svg' {...iconSize} alt='' />,
        'Java/Spring'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/netcore-logo.png' {...iconSize} alt='' />,
        'C#/ASP.NET Core'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/node-logo.png' {...iconSize} alt='' />,
        'Node/Express'
      ),
      createSkillItemInfo(
        <StaticImage
          src='../../assets/img/django-logo-negative.png'
          {...iconSize}
          alt=''
        />,
        'Python/Django'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/laravel-logo.png' {...iconSize} alt='' />,
        'PHP/Laravel'
      )
    ],
    frontend: [
      createSkillItemInfo(
        <StaticImage src='../../assets/img/react-logo.png' {...iconSize} alt='' />,
        'React'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/gatsby-logo.png' {...iconSize} alt='' />,
        'Gatsby'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/material-ui-logo.png' {...iconSize} alt='' />,
        'Material-UI'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/bootstrap-solid.svg' {...iconSize} alt='' />,
        'Bootstrap'
      )
    ],
    database: [
      createSkillItemInfo(
        <StaticImage src='../../assets/img/postgresql-logo.png' {...iconSize} alt='' />,
        'PostgreSQL'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/Firestore-Logo.png' {...iconSize} alt='' />,
        'Firestore'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/MongoDB-Logo.png' {...iconSize} alt='' />,
        'MongoDB'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/mysql-logo.png' {...iconSize} alt='' />,
        'MySQL'
      )
    ],
    cloud: [
      createSkillItemInfo(
        <StaticImage src='../../assets/img/gcp-logo.png' {...iconSize} alt='' />,
        'Google Cloud Platform',
        'GKE, GCS, GIP, Apigee, etc.'
      ),
      createSkillItemInfo(
        <StaticImage src='../../assets/img/aws-logo.png' {...iconSize} alt='' />,
        'Amazon Web Services',
        'EC2, S3, Lambda, Route 53, etc.'
      ),
      createSkillItemInfo(
        <StaticImage
          src='../../assets/img/digital-ocean-logo.png'
          {...iconSize}
          alt=''
        />,
        'Digital Ocean',
        'Droplets'
      )
    ]
  },
  visualization: {
    javascript: [
      createVisualizationItemInfo('yellow', 'Highcharts', 'See example above'),
      createVisualizationItemInfo('yellow', 'Google Maps'),
      createVisualizationItemInfo('yellow', 'Mapbox'),
      createVisualizationItemInfo('yellow', 'Plotly'),
      createVisualizationItemInfo('yellow', 'Chart.js')
    ],
    python: [
      createVisualizationItemInfo('green', 'Matplotlib'),
      createVisualizationItemInfo('green', 'ReportLab')
    ],
    r: [
      createVisualizationItemInfo('blue', 'Ggplot2'),
      createVisualizationItemInfo('blue', 'Leaflet R'),
      createVisualizationItemInfo('blue', 'Shiny'),
      createVisualizationItemInfo('blue', 'R Markdown')
    ]
  }
};
