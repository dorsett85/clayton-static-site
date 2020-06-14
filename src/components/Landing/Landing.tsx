import React, { useState } from 'react';
import { CssBaseline, makeStyles, createStyles } from '@material-ui/core';
import LandingModal from '../LandingModal/LandingModal';
import LandingContent from '../LandingContent/LandingContent';
import LandingFab from '../LandingFab/LandingFab';
import snowbirdBackground from '../../assets/img/snowbird_dark.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      height: '100vh',
      backgroundImage: `url(${snowbirdBackground})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  })
);

const Landing: React.FC = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [modalInfoIdx, setModalInfoIdx] = useState<number>(0);

  const handleOnModalIdxChange = (idx: number): void => {
    setModalInfoIdx(idx);
    if (!openModal) {
      setOpenModal(true);
    }
  };

  const handleOnModalClose = (): void => setOpenModal(false);

  return (
    <>
      <CssBaseline />
      <div className={classes.background}>
        <LandingContent onButtonClick={handleOnModalIdxChange} />
      </div>
      <LandingModal
        open={openModal}
        onClose={handleOnModalClose}
        modalInfoIdx={modalInfoIdx}
        onModalInfoIdxChange={handleOnModalIdxChange}
      />
      <LandingFab show={!openModal} />
    </>
  );
};

export default Landing;
