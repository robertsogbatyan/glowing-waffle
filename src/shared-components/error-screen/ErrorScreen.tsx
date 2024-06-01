import React, {ReactNode} from 'react';
import errorImage from '../../assets/error.webp';
import {StyledAction, StyledImage, StyledMessage, StyledTitle, StyledWrapper} from './styled';

type TErrorScreen = {
  title?: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
};

const ErrorScreen: React.FC<TErrorScreen> = ({title, message, action}) => {
  return (
    <StyledWrapper>
      <StyledImage src={errorImage} />
      <StyledTitle>{title}</StyledTitle>
      <StyledMessage>{message}</StyledMessage>
      <StyledAction>{action}</StyledAction>
    </StyledWrapper>
  );
};

export {ErrorScreen};
