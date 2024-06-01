import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  background-color: #ffecc0;
`;

const StyledLogo = styled.img`
  width: 6em;
  height: 6em;
  object-fit: cover;
`;

const StyledNav = styled.nav`
  > *:not(:first-child) {
    margin-left: 1em;
  }
`;

export {StyledHeader, StyledLogo, StyledNav};
