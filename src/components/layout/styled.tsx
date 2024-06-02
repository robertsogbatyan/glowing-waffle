import styled from 'styled-components';
import {Header} from '../header';

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const StyledHeaderWrapper = styled(Header)`
  flex-shrink: 0;
  flex-grow: 0;
`;

const StyledMain = styled.main`
  flex-shrink: 1;
  flex-grow: 1;

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition:
      opacity 150ms,
      transform 150ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition:
      opacity 150ms,
      transform 150ms;
  }
`;

const StyledPage = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100em;
  height: 100%;
  overflow: auto;
`;

export {StyledHeaderWrapper, StyledLayout, StyledMain, StyledPage};
