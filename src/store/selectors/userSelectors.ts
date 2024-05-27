import {createEntityAdapter} from '@reduxjs/toolkit';
import {RequestStatus, TUserDTO} from '../../data-structures';
import {RootState} from '../store';

const usersAdapter = createEntityAdapter<TUserDTO>();
const usersSelectors = usersAdapter.getSelectors<RootState>((state) => state.user.users);

const selectUsers = (state: RootState): TUserDTO[] => usersSelectors.selectAll(state);

const selectUsersStatus = (state: RootState): RequestStatus =>
  state.user.users.status || RequestStatus.IDLE;

export {selectUsers, selectUsersStatus};
