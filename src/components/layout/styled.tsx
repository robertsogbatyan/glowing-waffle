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
  overflow: auto;
`;

export {StyledHeaderWrapper, StyledLayout, StyledMain};
