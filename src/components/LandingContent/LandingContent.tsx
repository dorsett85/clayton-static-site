import React from 'react';
import {
  Button,
  Grid,
  keyframes,
  styled,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { lightBlue } from '@mui/material/colors';
import { Build, PersonPinCircle, TrendingUp } from '@mui/icons-material';

const linkInfo = [
  { text: 'Development', icon: <Build />, hashRef: '#software-development' },
  { text: 'Visualization', icon: <TrendingUp />, hashRef: '#data-visualization' },
  { text: 'Personal', icon: <PersonPinCircle />, hashRef: '#personal' }
];

const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const OverlayContainer = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 20px;
  z-index: 1;
`;

const CenterGrid = styled(Grid)`
  position: relative;
  margin-bottom: 40px;
`;

const HeadingContainer = styled('div')`
  margin-bottom: 32px;
  opacity: 0;
  transform: translateY(-200%);
  animation: ${slideInDown} 0.5s ease-out 0.25s forwards;
`;

const HeadingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: '0 0 5px #000000',
  fontSize: 45,
  [theme.breakpoints.down('xs')]: {
    fontSize: 30
  }
}));

const SubHeadingText = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  textShadow: '0 0 5px #000000',
  fontSize: 22,
  [theme.breakpoints.down('xs')]: {
    fontSize: 18
  }
}));

const ButtonGrid = styled(Grid)`
  opacity: 0;
  transform: scale(0);
  animation: ${zoomIn} 0.5s ease-out 0.75s forwards;
`;

const SectionButton = styled(Button)(({ theme }) => ({
  backgroundColor: lightBlue[500],
  '&:hover': {
    backgroundColor: lightBlue[700]
  },
  color: theme.palette.common.white,
  fontWeight: 600
}));

const LandingContent: React.FC = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <OverlayContainer>
      <CenterGrid item sm={12} md={8} lg={6}>
        <HeadingContainer>
          <HeadingText variant='h1' align='center' gutterBottom>
            Clayton Phillips-Dorsett
          </HeadingText>
          <SubHeadingText variant='h2' align='center'>
            Software Developer/Architect
          </SubHeadingText>
        </HeadingContainer>
        <ButtonGrid container spacing={2}>
          {linkInfo.map((info) => (
            <Grid key={info.text} item xs={12} sm={4}>
              <SectionButton
                fullWidth
                variant='contained'
                size={isXsScreen ? 'medium' : 'large'}
                startIcon={info.icon}
                href={info.hashRef}
              >
                {info.text}
              </SectionButton>
            </Grid>
          ))}
        </ButtonGrid>
      </CenterGrid>
    </OverlayContainer>
  );
};

export default LandingContent;
