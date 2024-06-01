import React from 'react';
import {Link} from 'react-router-dom';
import logoImage from '../../assets/logo.webp';
import {Button} from '../../shared-components';
import {StyledHeader, StyledLogo, StyledNav} from './styled';

type THeaderProps = {
  className?: string;
};

// TODO: styles and responsiveness
const Header: React.FC<THeaderProps> = ({className}) => {
  return (
    <StyledHeader className={className}>
      <Link to={'/'}>
        <StyledLogo src={logoImage} />
      </Link>

      <StyledNav>
        <Link to={'/'}>
          <Button type={'secondary'}>Home</Button>
        </Link>

        <Link to={'/users'}>
          <Button type={'secondary'}>Users</Button>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
};

export {Header};
