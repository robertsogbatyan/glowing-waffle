import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {Users} from '../users/Users';

const UsersPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get('page') || '1');
  const searchTerm = searchParams.get('searchTerm') || '';
  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || '';

  const setPage = (page: number) => {
    setSearchParams((searchParams: URLSearchParams) => {
      const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('page', page.toString());

      return newSearchParams;
    });
  };

  const setSearchTerm = (searchTerm: string) => {
    setSearchParams((searchParams: URLSearchParams) => {
      const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('page', '1');
      searchTerm
        ? newSearchParams.set('searchTerm', searchTerm)
        : newSearchParams.delete('searchTerm');

      return newSearchParams;
    });
  };

  const setSorting = (sortBy: string, sortOrder: string) => {
    setSearchParams((searchParams: URLSearchParams) => {
      const newSearchParams: URLSearchParams = new URLSearchParams(searchParams);

      newSearchParams.set('page', '1');
      newSearchParams.set('sortBy', sortBy);
      newSearchParams.set('sortOrder', sortOrder);

      return newSearchParams;
    });
  };

  return (
    <Users
      page={page}
      setPage={setPage}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      sortBy={sortBy}
      sortOrder={sortOrder}
      setSorting={setSorting}
    />
  );
};

export {UsersPage as default};
