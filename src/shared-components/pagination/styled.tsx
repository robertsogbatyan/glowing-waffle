import styled from 'styled-components';

const StyledWrapper = styled.div`
  > * {
    margin: 0 0.2em;

    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StyledPage = styled.span`
  padding: 0 0.4em;
  font-size: 1.2em;
`;

export {StyledPage, StyledWrapper};
