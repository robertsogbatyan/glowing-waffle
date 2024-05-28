import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5em 1em;
  border-radius: 0.6em;
  border: 2px solid #ddd;
  font-size: 1em;
  transition: border-color linear 150ms;

  &:focus {
    border-color: #028391;
    outline: none;
  }
`;

export {StyledInput};
