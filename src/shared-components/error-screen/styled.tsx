import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 30em;
  height: 30em;
  border-radius: 50%;
`;

const StyledTitle = styled.h3`
  margin: 0.2em 0 0 0;
  font-size: 6em;

  &:empty {
    display: none;
  }
`;

const StyledMessage = styled.p`
  margin-top: 0.4em;
  font-size: 2em;

  &:empty {
    display: none;
  }
`;

const StyledAction = styled.div`
  margin-top: 3em;

  &:empty {
    display: none;
  }
`;

export {StyledAction, StyledImage, StyledMessage, StyledTitle, StyledWrapper};
