import React from 'react';
import {Outlet} from 'react-router';
import {StyledHeaderWrapper, StyledLayout, StyledMain} from './styled';

const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <StyledHeaderWrapper />

      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledLayout>
  );
};

export {Layout};
