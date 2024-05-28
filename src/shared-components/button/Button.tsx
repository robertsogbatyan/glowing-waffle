import React, {ReactNode} from 'react';
import {StyledButton} from './styled';

type TButtonType = 'primary' | 'secondary';
type TButtonSize = 'sm' | 'md';

type TButtonProps = {
  type?: TButtonType;
  size?: TButtonSize;
  onClick?: () => void | Promise<unknown>;
  href?: string;
  disabled?: boolean;
  children: ReactNode;
};

const Button: React.FC<TButtonProps> = ({
  type = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  children,
}) => {
  return (
    <StyledButton
      as={href ? 'a' : 'button'}
      {...(href ? {href} : {type: 'button'})}
      onClick={onClick}
      type={type}
      size={size}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export {Button, type TButtonSize, type TButtonType};
