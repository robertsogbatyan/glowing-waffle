import styled, {css} from 'styled-components';
import {ErrorScreen} from '../error-screen';
import {LoadingScreen} from '../loading-screen';

const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  word-break: break-all;
  text-align: left;

  thead {
    background-color: #fffcf5;
  }

  th {
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 0.9em;
    font-weight: 800;
  }

  td {
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 1em;
  }
  tr:nth-child(odd) {
    background-color: #fdf4de;
  }
`;

type TStyledTHProps = {
  width: string | number | undefined;
};

const StyledTH = styled.th<TStyledTHProps>`
  ${({width}) => css`
    width: ${width};
  `}
`;

const StyledLoadingScreen = styled(LoadingScreen)`
  height: 40em;
`;

const StyledErrorScreen = styled(ErrorScreen)`
  height: 40em;
`;

export {StyledErrorScreen, StyledLoadingScreen, StyledTH, StyledTable};
