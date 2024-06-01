import React from 'react';
import {LoadingSpinner} from '../loading-spinner';
import {StyledWrapper} from './styled';

const LoadingScreen: React.FC = () => {
  return (
    <StyledWrapper>
      <LoadingSpinner />
    </StyledWrapper>
  );
};

export {LoadingScreen};
