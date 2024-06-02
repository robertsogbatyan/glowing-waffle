import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {TUserDTO} from '../../data-structures';
import {
  Button,
  ErrorScreen,
  Input,
  Pagination,
  Select,
  TSelectOption,
  Table,
} from '../../shared-components';
import {
  AppDispatch,
  getUsers,
  selectUsers,
  selectUsersError,
  selectUsersLoading,
  selectUsersTotalPages,
  setUsersPage,
  setUsersSearchTerm,
  setUsersSortBy,
  setUsersSortOrder,
} from '../../store';
import {Utils} from '../../utils';
import {StyledFilters, StyledPaginationWrapper, StyledTableWrapper, StyledWrapper} from './styled';

const sortingOptions: TSelectOption[] = [
  {
    value: 'name-asc',
    label: 'Name (A-Z)',
  },
  {
    value: 'name-desc',
    label: 'Name (Z-A)',
  },
  {
    value: 'dateOfBirth-asc',
    label: 'Age descending',
  },
  {
    value: 'dateOfBirth-desc',
    label: 'Age ascending',
  },
];

type TUsersProps = {
  page: number;
  setPage: (page: number) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  sortBy: string;
  sortOrder: string;
  setSorting: (sortBy: string, sortOrder: string) => void;
};

const Users: React.FC<TUsersProps> = ({
  page,
  setPage,
  searchTerm,
  setSearchTerm,
  sortBy,
  sortOrder,
  setSorting,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const users: TUserDTO[] = useSelector(selectUsers);
  const usersTotalPages: number = useSelector(selectUsersTotalPages) || 1;
  const isLoading: boolean = useSelector(selectUsersLoading);
  const error: string | undefined = useSelector(selectUsersError);

  useEffect(() => {
    dispatch(setUsersPage(page));
    dispatch(setUsersSearchTerm(searchTerm));
    dispatch(setUsersSortBy(sortBy));
    dispatch(setUsersSortOrder(sortOrder));
    dispatch(getUsers());
  }, [page, searchTerm, sortBy, sortOrder]);

  if (error) {
    return (
      <ErrorScreen
        title={'Error'}
        message={error}
        action={
          <Link to={'/'}>
            <Button type={'primary'}>Go to home page</Button>
          </Link>
        }
      />
    );
  }

  const usersTableColumns = [
    {
      name: 'name',
      label: 'Name',
      width: '40%',
      render: (
        _value: unknown,
        _name: string,
        user: {id: string | number} & Record<string, unknown>
      ) => <Link to={`/users/${user.id}`}>{(user as TUserDTO).name}</Link>,
    },
    {
      name: 'email',
      label: 'Email',
      width: '40%',
    },
    {
      name: 'age',
      label: 'Age',
      width: '10%',
      render: (
        _value: unknown,
        _name: string,
        user: {id: string | number} & Record<string, unknown>
      ) => Utils.getAge((user as TUserDTO).dateOfBirth || ''),
    },
    {
      name: 'actions',
      label: '',
      width: '10%',
    },
  ];

  const onSortingChange = (sorting: string): void => {
    const [sortBy, sortOrder] = sorting.split('-');

    setSorting(sortBy, sortOrder);
  };

  return (
    <StyledWrapper>
      <StyledFilters>
        <Input value={searchTerm} onChange={setSearchTerm} placeholder={'Search...'} />
        <Select
          value={`${sortBy}-${sortOrder}`}
          options={sortingOptions}
          onChange={onSortingChange}
        />
      </StyledFilters>

      <StyledTableWrapper>
        <Table columns={usersTableColumns} data={users} isLoading={isLoading} />
      </StyledTableWrapper>

      <StyledPaginationWrapper>
        <Pagination currentPage={page} onPageChange={setPage} totalPages={usersTotalPages} />
      </StyledPaginationWrapper>
    </StyledWrapper>
  );
};

export {Users};
