import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {UserClient} from '../../clients';
import {TListDTO} from '../../clients/base/BaseWCRUDClient';
import {RequestStatus, SortOrder, TUserDTO} from '../../data-structures';
import {RootState} from '../store';

const ITEMS_PER_PAGE: number = 10;

const usersAdapter = createEntityAdapter<TUserDTO>();

type TUserState = {
  users: {
    ids: string[];
    entities: Record<number, TUserDTO>;
    page: number;
    totalPages: number;
    searchTerm: string;
    sortBy: string;
    sortOrder: SortOrder;
    status: RequestStatus;
    //TODO: update error type if needed
    error: string | null;
    cache: Record<string, TUserDTO[]>;
  };
};

const initialState: TUserState = {
  users: {
    ...usersAdapter.getInitialState(),
    page: 1,
    totalPages: 1,
    searchTerm: '',
    sortBy: '',
    sortOrder: SortOrder.ASC,
    status: RequestStatus.IDLE,
    error: null,
    cache: {},
  },
};

const getUsers = createAsyncThunk('user/getAll', async (_, {getState}) => {
  const state: RootState = getState() as RootState;
  const {page, searchTerm, sortBy, sortOrder} = state.user.users;
  const cacheKey: string = `${page}-${searchTerm}-${sortBy}-${sortOrder}`;

  if (state.user.users.cache[cacheKey]) {
    return {
      users: state.user.users.cache[cacheKey],
      totalPages: state.user.users.totalPages,
      isFromCache: true,
    };
  }

  return UserClient.getAll(page, ITEMS_PER_PAGE, searchTerm, sortBy, sortOrder);
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsersPage(state, action) {
      const page: number = action.payload;

      state.users.page = page;
    },
    setUsersSearchTerm(state, action) {
      const searchTerm: string = action.payload;

      state.users.searchTerm = searchTerm;
    },
    setUsersSortBy(state, action) {
      const sortBy: string = action.payload;

      state.users.sortBy = sortBy;
    },
    setUsersSortOrder(state, action) {
      const sortOrder: SortOrder = action.payload;

      state.users.sortOrder = sortOrder;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state: TUserState) => {
        state.users.status = RequestStatus.LOADING;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        const {data, totalPages} = action.payload as TListDTO<TUserDTO>;

        usersAdapter.setAll(state.users, data);
        state.users.totalPages = totalPages;
        state.users.status = RequestStatus.SUCCEEDED;
      })
      .addCase(getUsers.rejected, (state) => {
        // TODO: error handling
        state.users.status = RequestStatus.FAILED;
      });
  },
});

const userReducer = userSlice.reducer;
const {setUsersPage, setUsersSearchTerm, setUsersSortBy, setUsersSortOrder} = userSlice.actions;

export {getUsers, setUsersPage, setUsersSearchTerm, setUsersSortBy, setUsersSortOrder, userReducer};
