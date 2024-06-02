import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 4em;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledFilters = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledTableWrapper = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const StyledPaginationWrapper = styled.div`
  margin-top: 1em;
  text-align: center;
`;

export {StyledFilters, StyledPaginationWrapper, StyledTableWrapper, StyledWrapper};
