import {lighten} from 'polished';
import styled, {css} from 'styled-components';
import {TButtonSize, TButtonType} from './Button';

type TStyledButtonProps = {
  type: TButtonType;
  size: TButtonSize;
  disabled: boolean;
};

const StyledButton = styled.span<TStyledButtonProps>`
  border: 0;
  border-radius: 0.6em;
  text-decoration: none;
  transition: background-color linear 150ms;
  cursor: pointer;

  ${({type}) => {
    switch (type) {
      case 'primary':
        return css`
          background-color: #028391;
          color: white;

          &:hover {
            background-color: ${lighten(0.05, '#028391')};
          }
        `;

      case 'secondary':
        return css`
          background-color: #dddddd;
          color: black;

          &:hover {
            background-color: ${lighten(0.05, '#dddddd')};
          }
        `;
    }
  }}

  ${({size}) => {
    switch (size) {
      case 'sm':
        return css`
          padding: 0.5em 1em;
          font-size: 1em;
        `;

      case 'md':
        return css`
          padding: 0.6em 1.2em;
          font-size: 1.1em;
        `;
    }
  }}

  ${({disabled}) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: default;
      pointer-events: none;
    `}
`;

export {StyledButton};
