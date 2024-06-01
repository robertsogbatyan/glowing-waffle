import styled, {keyframes} from 'styled-components';

// Taken from https://cssloaders.github.io/
const pulseAnimation = keyframes`
  to {
      transform: scale(0.8);
      opacity: 0.5;
    }
`;

const StyledSpinner = styled.span`
  color: #ddd;
  font-family: Consolas, Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 78px;
  opacity: 0.8;

  &:before {
    content: '{';
    display: inline-block;
    animation: ${pulseAnimation} 0.4s alternate infinite ease-in-out;
  }
  &:after {
    content: '}';
    display: inline-block;
    animation: ${pulseAnimation} 0.4s 0.3s alternate infinite ease-in-out;
  }
`;

export {StyledSpinner};
