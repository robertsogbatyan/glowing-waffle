import styled from 'styled-components';

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
`;

export {StyledDataList};
