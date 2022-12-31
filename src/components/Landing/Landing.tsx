import React, { useState } from 'react';
import LandingBackground from '../LandingBackground/LandingBackground';
import LandingContent from '../LandingContent/LandingContent';
import LandingModal from '../LandingModal/LandingModal';
import LandingFab from '../LandingFab/LandingFab';

const Landing: React.FC = () => {
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
      <LandingBackground />
      <LandingContent onButtonClick={handleOnModalIdxChange} />
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
