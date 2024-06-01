import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {UserClient} from '../../clients';
import {RequestStatus, SortOrder, TUserDTO} from '../../data-structures';
import {selectUserById} from '../selectors';
import {RootState} from '../store';

const USERS_PER_PAGE: number = 10;

const usersAdapter = createEntityAdapter<TUserDTO>();

type TUserState = {
  ids: string[];
  entities: Record<number, TUserDTO>;
  page: number;
  searchTerm: string;
  sortBy: string;
  sortOrder: SortOrder;
  getUsersStatus: RequestStatus;
  getUsersError: string | undefined;
  getUserStatus: RequestStatus;
  getUserError: string | undefined;
  cache: Record<
    string,
    {
      pageIdsMap: Record<number, string[]>;
      totalCount: number;
    }
  >;
};

const initialState: TUserState = {
  ...usersAdapter.getInitialState(),
  page: 1,
  searchTerm: '',
  sortBy: '',
  sortOrder: SortOrder.ASC,
  getUsersStatus: RequestStatus.IDLE,
  getUsersError: undefined,
  getUserStatus: RequestStatus.IDLE,
  getUserError: undefined,
  cache: {},
};

const getUsers = createAsyncThunk('user/getAll', async (_, {getState}) => {
  const state: RootState = getState() as RootState;
  const {page, searchTerm, sortBy, sortOrder} = state.user;
  const cacheKey: string = `${searchTerm}-${sortBy}-${sortOrder}`;
  const cacheData:
    | {
        pageIdsMap: Record<number, string[]>;
        totalCount: number;
      }
    | undefined = state.user.cache[cacheKey];
  const isCacheAvailable: boolean = !!(cacheData && cacheData.pageIdsMap[page]);

  if (isCacheAvailable) {
    return Promise.resolve();
  }

  const {data, totalCount} = await UserClient.getAll(
    page,
    USERS_PER_PAGE,
    searchTerm,
    sortBy,
    sortOrder
  );

  return {
    data,
    totalCount,
    cacheKey,
    page,
  };
});

const getUser = createAsyncThunk('user/get', async (id: string, {getState}) => {
  const state: RootState = getState() as RootState;
  const cachedUser: TUserDTO | undefined = selectUserById(id)(state);

  if (cachedUser) {
    return Promise.resolve();
  }

  return UserClient.get(id);
});

const deleteUser = createAsyncThunk('user/delete', async (id: string) => {
  return UserClient.delete(id);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsersPage(state, action) {
      const page: number = action.payload;

      state.page = page;
    },
    setUsersSearchTerm(state, action) {
      const searchTerm: string = action.payload;

      state.searchTerm = searchTerm;
    },
    setUsersSortBy(state, action) {
      const sortBy: string = action.payload;

      state.sortBy = sortBy;
    },
    setUsersSortOrder(state, action) {
      const sortOrder: SortOrder = action.payload;

      state.sortOrder = sortOrder;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.getUsersStatus = RequestStatus.LOADING;
        state.getUsersError = undefined;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        if (action.payload) {
          const {data, totalCount, cacheKey, page} = action.payload;
          const ids: string[] = data.map((u) => u.id);

          usersAdapter.upsertMany(state, data);

          if (!state.cache[cacheKey]) {
            state.cache[cacheKey] = {
              pageIdsMap: {},
              totalCount: 1,
            };
          }

          state.cache[cacheKey].pageIdsMap[page] = ids;
          state.cache[cacheKey].totalCount = totalCount;
        }

        state.getUsersStatus = RequestStatus.SUCCEEDED;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.getUsersStatus = RequestStatus.FAILED;
        state.getUsersError = action.error.message;
      });

    builder
      .addCase(getUser.pending, (state) => {
        state.getUserStatus = RequestStatus.LOADING;
        state.getUserError = undefined;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        if (action.payload) {
          const user: TUserDTO = action.payload as TUserDTO;

          usersAdapter.upsertOne(state, user);
        }

        state.getUserStatus = RequestStatus.SUCCEEDED;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.getUserStatus = RequestStatus.FAILED;
        state.getUserError = action.error.message;
      });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      if (action.payload) {
        const userId: string = action.payload;

        usersAdapter.removeOne(state, userId);

        invalidateCacheAfterUserDeleted(state.cache, userId);
      }
    });
  },
});

const invalidateCacheAfterUserDeleted = (
  cache: Record<
    string,
    {
      pageIdsMap: Record<number, string[]>;
      totalCount: number;
    }
  >,
  userId: string
) => {
  const cacheKeysWithUserId: string[] = Object.entries(cache).reduce(
    (
      cacheKeysWithUserId: string[],
      [key, data]: [key: string, data: {pageIdsMap: Record<number, string[]>; totalCount: number}]
    ) => {
      const hasUserId: boolean = Object.values(data.pageIdsMap).some((ids) => ids.includes(userId));

      if (hasUserId) {
        cacheKeysWithUserId.push(key);
      }

      return cacheKeysWithUserId;
    },
    []
  );

  cacheKeysWithUserId.forEach((key: string) => {
    delete cache[key];
  });
};

const userReducer = userSlice.reducer;
const {setUsersPage, setUsersSearchTerm, setUsersSortBy, setUsersSortOrder} = userSlice.actions;

export {
  USERS_PER_PAGE,
  deleteUser,
  getUser,
  getUsers,
  setUsersPage,
  setUsersSearchTerm,
  setUsersSortBy,
  setUsersSortOrder,
  userReducer,
};
