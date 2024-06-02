import React, {Fragment, ReactNode} from 'react';
import {StyledErrorScreen, StyledLoadingScreen, StyledTH, StyledTable} from './styled';

type TTableProps = {
  columns: TTableColumn[];
  data?: ({id: string | number} & Record<string, ReactNode | unknown>)[];
  isLoading?: boolean;
};

type TTableColumn = {
  name: string;
  label?: string;
  width?: string | number;
  render?: (
    value: unknown,
    name: string,
    data: {id: string | number} & Record<string, ReactNode | unknown>
  ) => ReactNode;
};

// TODO: add onRowClick prop
const Table: React.FC<TTableProps> = ({columns, data, isLoading}) => {
  return (
    <Fragment>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <StyledTH key={column.name} width={column.width}>
                {column.label}
              </StyledTH>
            ))}
          </tr>
        </thead>

        {!isLoading && data?.length && (
          <tbody>
            {data?.map((item) => (
              <tr key={item.id}>
                {columns.map((column) => (
                  <td key={column.name}>
                    {column.render
                      ? column.render(item[column.name], column.name, item)
                      : (item[column.name] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </StyledTable>

      {isLoading && <StyledLoadingScreen />}

      {/* TODO: receive customer placeholder message. This will be useful if e.g. there is no data for specific filters */}
      {!isLoading && !data?.length && <StyledErrorScreen message={'No Data'} />}
    </Fragment>
  );
};

export {Table, type TTableColumn};
