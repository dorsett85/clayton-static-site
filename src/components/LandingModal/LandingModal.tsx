import React, { MouseEventHandler } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Slide,
  SlideProps,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CloseIcon from '@material-ui/icons/Close';
import { modalInfoList } from './modalInfo';

interface LandingModalProps extends Pick<DialogProps, 'open'> {
  /**
   * Handler for modal close event
   */
  onClose: () => void;
  /**
   * Index of modalInfoList to use for displaying content
   */
  modalInfoIdx: number;
  /**
   * Handler when the user clicks the left or right arrows. This will increment
   * or decrement through the indexes of modalInfoList.
   */
  onModalInfoIdxChange: (idx: number) => void;
}

/**
 * Modal transition component
 */
const ModalTransition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction='down' ref={ref} {...props} />;
});
ModalTransition.displayName = 'ModalTransition';

const LandingModal: React.FC<LandingModalProps> = ({
  open,
  onClose,
  modalInfoIdx,
  onModalInfoIdxChange
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const modalInfo = modalInfoList[modalInfoIdx];

  // Handler to move between the different modal screens. This will loop through
  // the indexes of modalInfoList.
  const handleOnModalChange: MouseEventHandler<HTMLButtonElement> = ({
    currentTarget
  }) => {
    const targetValue = +currentTarget.value;
    const newModalInfoIdx =
      targetValue >= modalInfoList.length
        ? 0
        : targetValue < 0
        ? modalInfoList.length - 1
        : targetValue;
    onModalInfoIdxChange(newModalInfoIdx);
  };

  return (
    <Dialog
      open={open}
      fullWidth
      fullScreen={isSmallScreen}
      maxWidth='md'
      TransitionComponent={ModalTransition}
      onClose={onClose}
    >
      <DialogTitle>{modalInfo.title}</DialogTitle>
      <DialogContent>{modalInfo.content}</DialogContent>
      <DialogActions>
        <Button onClick={handleOnModalChange} color='primary' value={modalInfoIdx - 1}>
          <ArrowLeftIcon />
        </Button>
        <Button onClick={handleOnModalChange} color='primary' value={modalInfoIdx + 1}>
          <ArrowRightIcon />
        </Button>
        <Button onClick={onClose} color='primary'>
          <CloseIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LandingModal;
