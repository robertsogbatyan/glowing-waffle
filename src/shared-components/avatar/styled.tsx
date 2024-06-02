import styled, {css} from 'styled-components';
import {TAvatarSize} from './Avatar';

type TStyledWrapperProps = {
  size: TAvatarSize;
};

const StyledWrapper = styled.span<TStyledWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: auto;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;

  ${({size}) => {
    switch (size) {
      case 'sm':
        return css`
          width: 3em;
        `;

      case 'lg':
        return css`
          width: 10em;
        `;
    }
  }}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledAlt = styled.span`
  color: #028391;
`;

export {StyledAlt, StyledImage, StyledWrapper};
