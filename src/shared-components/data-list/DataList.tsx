import React, {Fragment} from 'react';
import {StyledDataList} from './styled';

type TDataListEntry = {
  term: string;
  description: string;
};

type TDataListProps = {
  entries: TDataListEntry[];
};

const DataList: React.FC<TDataListProps> = ({entries}) => {
  return (
    <StyledDataList>
      {entries.map(({term, description}) => (
        <Fragment key={term}>
          <dt>{term}</dt>
          <dd>{description}</dd>
        </Fragment>
      ))}
    </StyledDataList>
  );
};

export {DataList, type TDataListEntry};
