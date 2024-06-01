import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  Button,
  ErrorScreen,
  Input,
  LoadingScreen,
  Pagination,
  Select,
  TSelectOption,
} from '../../shared-components';
import {
  AppDispatch,
  getUsers,
  selectUserIds,
  selectUsersError,
  selectUsersLoading,
  selectUsersTotalPages,
  setUsersPage,
  setUsersSearchTerm,
  setUsersSortBy,
  setUsersSortOrder,
} from '../../store';
import {UserRow} from '../user-row';

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

// TODO: styles
// TODO: shared component for table
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

  const userIds: string[] = useSelector(selectUserIds) || [];
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

  const onSortingChange = (sorting: string): void => {
    const [sortBy, sortOrder] = sorting.split('-');

    setSorting(sortBy, sortOrder);
  };

  return (
    <div>
      <div>
        <Input value={searchTerm} onChange={setSearchTerm} />
        <Select
          value={`${sortBy}-${sortOrder}`}
          options={sortingOptions}
          onChange={onSortingChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userIds.map((id) => (
            <UserRow key={id} id={id} />
          ))}
        </tbody>
      </table>

      {isLoading && <LoadingScreen />}

      <Pagination currentPage={page} onPageChange={setPage} totalPages={usersTotalPages} />
    </div>
  );
};

export {Users};
