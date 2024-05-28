import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 4em;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  text-align: center;
`;

const StyledDialog = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 40em;
  height: 20em;
  border: 1px solid #ddd;
  border-radius: 1em;
  background-color: white;
  box-shadow: 0 0.4em 0.6em 0 rgba(0, 0, 0, 0.2);
  text-align: left;

  > *:not(:first-child) {
    border-top: 1px solid #ddd;
  }
`;

const StyledHeader = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  padding: 1em;
  font-size: 1.4em;
`;

const StyledBody = styled.div`
  flex-shrink: 1;
  flex-grow: 1;
  padding: 1em;
  font-size: 1.2em;
`;

const StyledFooter = styled.div`
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 1em;
  padding: 1em;
`;

export {StyledBody, StyledDialog, StyledFooter, StyledHeader, StyledWrapper};
