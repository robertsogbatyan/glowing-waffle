import styled from 'styled-components';
import {deviseSizes} from '../../config';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 4em;
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: ${deviseSizes.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2em;
  }
`;

const StyledBackButtonContainer = styled.div`
  position: absolute;
  top: 2em;
  left: 2em;
`;

const StyledAvatarContainer = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  text-align: right;
`;

const StyledDataListContainer = styled.div`
  flex-shrink: 1;
  flex-grow: 0;
`;

export {StyledAvatarContainer, StyledBackButtonContainer, StyledDataListContainer, StyledWrapper};
