import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import LandingModalDevelopment from './LandingModalDevelopment';
import LandingModalVisualization from './LandingModalVisualization';
import LandingModalPersonal from './LandingModalPersonal';

export interface ModalInfo {
  /**
   * Icon displayed inside button that toggles the modal
   */
  btnIcon: React.ReactElement;
  /**
   * Text displayed inside button that toggles the modal
   */
  btnTxt: 'Development' | 'Visualization' | 'Personal';
  /**
   * Modal title displayed as text
   */
  title: string;
  /**
   * Content inside the modal
   */
  content: React.ReactElement;
}

export const modalInfoList: ModalInfo[] = [
  {
    btnIcon: <BuildIcon />,
    btnTxt: 'Development',
    title: 'Software Development',
    content: <LandingModalDevelopment />
  },
  {
    btnIcon: <TrendingUpIcon />,
    btnTxt: 'Visualization',
    title: 'Data Visualization',
    content: <LandingModalVisualization />
  },
  {
    btnIcon: <PersonPinCircleIcon />,
    btnTxt: 'Personal',
    title: 'Not Always Working...',
    content: <LandingModalPersonal />
  }
];
