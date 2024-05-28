import React from 'react';
import {Button} from '../button';
import {StyledBody, StyledDialog, StyledFooter, StyledHeader, StyledWrapper} from './styled';

// TODO: Animate show/hide
// TODO: Add DialogContext to easily show/hide the dialogs
type TConfirmationDialogProps = {
  isVisible: boolean;
  title?: string;
  message?: string;
  confirmButtonText?: string;
  onConfirm?: () => void | Promise<unknown>;
  cancelButtonText?: string;
  onCancel?: () => void;
};

const ConfirmationDialog: React.FC<TConfirmationDialogProps> = ({
  isVisible,
  title,
  message,
  confirmButtonText = 'Confirm',
  onConfirm,
  cancelButtonText = 'Cancel',
  onCancel,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <StyledWrapper>
      <StyledDialog>
        {title && <StyledHeader>{title}</StyledHeader>}
        {message && <StyledBody>{message}</StyledBody>}
        <StyledFooter>
          <Button type={'primary'} onClick={onConfirm}>
            {confirmButtonText}
          </Button>
          <Button type={'secondary'} onClick={onCancel}>
            {cancelButtonText}
          </Button>
        </StyledFooter>
      </StyledDialog>
    </StyledWrapper>
  );
};

export {ConfirmationDialog, type TConfirmationDialogProps};
