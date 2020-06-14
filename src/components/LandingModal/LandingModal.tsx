import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  SlideProps
} from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CloseIcon from '@material-ui/icons/Close';

/**
 * Modal transition component
 */
const ModalTransition = React.forwardRef<unknown, SlideProps>((props, ref) => {
  return <Slide direction='down' ref={ref} {...props} />;
});
ModalTransition.displayName = 'ModalTransition';

interface LandingModalProps {
  modal: any | undefined;
  /**
   * Handler when the user clicks the left or right arrows or the modal closes. If the
   * section argument is undefined then the modal will close. Otherwise it's a number that
   * represents the index of the modalInfo list containing a ModalInfo object.
   */
  onModalChange: (section?: number) => void;
}

const LandingModal: React.FC<LandingModalProps> = ({ modal, onModalChange }) => {
  return (
    <Dialog
      open={!!modal?.name}
      fullWidth
      fullScreen={window.innerWidth < 600}
      maxWidth='md'
      TransitionComponent={ModalTransition}
      onClose={(): void => onModalChange()}
    >
      <DialogTitle>{modal?.title || ''}</DialogTitle>
      <DialogContent>{modal?.content}</DialogContent>
      <DialogActions>
        <Button onClick={(): void => onModalChange(modal?.prevModal)} color='primary'>
          <ArrowLeftIcon />
        </Button>
        <Button onClick={(): void => onModalChange(modal?.nextModal)} color='primary'>
          <ArrowRightIcon />
        </Button>
        <Button onClick={(): void => onModalChange()} color='primary'>
          <CloseIcon />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LandingModal;
