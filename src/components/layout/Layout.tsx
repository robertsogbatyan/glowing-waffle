import React, {RefObject, createRef, useRef} from 'react';
import {useLocation, useOutlet} from 'react-router';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {StyledHeaderWrapper, StyledLayout, StyledMain, StyledPage} from './styled';

const Layout: React.FC = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  const nodeRefMap = useRef<Map<string, RefObject<HTMLDivElement>>>(new Map());

  if (!nodeRefMap.current.get(location.pathname)) {
    nodeRefMap.current.set(location.pathname, createRef());
  }

  const nodeRef = nodeRefMap?.current.get(location.pathname);

  return (
    <StyledLayout>
      <StyledHeaderWrapper />

      <StyledMain>
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={150}
            classNames={'page'}
            unmountOnExit
          >
            {() => <StyledPage ref={nodeRef}>{currentOutlet}</StyledPage>}
          </CSSTransition>
        </SwitchTransition>
      </StyledMain>
    </StyledLayout>
  );
};

export {Layout};
