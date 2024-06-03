import {createEntityAdapter} from '@reduxjs/toolkit';
import {RequestStatus, TUserDTO} from '../../data-structures';
import {USERS_PER_PAGE} from '../slices';
import {RootState} from '../store';

const usersAdapter = createEntityAdapter<TUserDTO>();
const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.user);

const selectUsers = (state: RootState): TUserDTO[] | undefined => {
  const {page, searchTerm, sortBy, sortOrder} = state.user;
  const cacheKey: string = `${searchTerm}-${sortBy}-${sortOrder}`;
  const cachedData: {pageIdsMap: Record<number, string[]>; totalCount: number} | undefined =
    state.user.cache[cacheKey];
  const currentPageUserIds: string[] | undefined = cachedData?.pageIdsMap[page];
  const users: TUserDTO[] | undefined = currentPageUserIds?.map(
    (id) => selectUserById(id)(state) as TUserDTO
  );

  return users;
};

const selectUsersTotalPages = (state: RootState): number | undefined => {
  const {searchTerm, sortBy, sortOrder} = state.user;
  const cacheKey: string = `${searchTerm}-${sortBy}-${sortOrder}`;
  const cachedData: {pageIdsMap: Record<number, string[]>; totalCount: number} | undefined =
    state.user.cache[cacheKey];
  const totalPages: number = cachedData?.totalCount
    ? Math.ceil(cachedData.totalCount / USERS_PER_PAGE)
    : 0;

  return totalPages;
};

const selectUsersLoading = (state: RootState): boolean =>
  ![RequestStatus.SUCCEEDED, RequestStatus.FAILED].includes(state.user.getUsersStatus);

const selectUsersError = (state: RootState): string | undefined => state.user.getUsersError;

const selectUserById =
  (id: string) =>
  (state: RootState): TUserDTO | undefined => {
    return usersSelectors.selectById(state, id);
  };

const selectUserLoading = (state: RootState): boolean =>
  ![RequestStatus.SUCCEEDED, RequestStatus.FAILED].includes(state.user.getUserStatus);

const selectUserError = (state: RootState): string | undefined => state.user.getUserError;

export {
  selectUserById,
  selectUserError,
  selectUserLoading,
  selectUsers,
  selectUsersError,
  selectUsersLoading,
  selectUsersTotalPages,
};
