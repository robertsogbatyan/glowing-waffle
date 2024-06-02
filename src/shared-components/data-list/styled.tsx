import styled from 'styled-components';
import {deviseSizes} from '../../config';

const StyledDataList = styled.dl`
  > dt {
    display: inline-block;
    margin: 1em 0;
    padding-right: 2em;
    width: 30%;
    font-size: 1em;
    font-weight: 600;
    text-align: right;
    vertical-align: top;
  }

  > dd {
    display: inline-block;
    margin: 0.7em 0;
    width: 70%;
    font-size: 1.2em;
    word-break: break-all;
    vertical-align: top;
  }

  @media (max-width: ${deviseSizes.tablet}) {
    > dt {
      display: block;
      margin: 0;

      &:not(:first-child) {
        margin-top: 1.2em;
      }
    }

    > dd {
      display: block;
      margin: 0;
    }
  }
`;

export {StyledDataList};
