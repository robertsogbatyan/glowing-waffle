import React from 'react';
import {StyledAlt, StyledImage, StyledWrapper} from './styled';

type TAvatarSize = 'sm' | 'lg';

type TAvatarProps = {
  size?: TAvatarSize;
  src?: string;
  alt?: string;
  title?: string;
};

const Avatar: React.FC<TAvatarProps> = ({size = 'lg', src, alt, title}) => {
  return (
    <StyledWrapper size={size} title={title}>
      {src ? <StyledImage src={src} /> : <StyledAlt>{alt}</StyledAlt>}
    </StyledWrapper>
  );
};

export {Avatar, type TAvatarSize};
