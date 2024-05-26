import {config} from '../../config';
import {TNewUserDTO, TUserDTO} from '../../data-structures';
import {BaseWCRUDClient} from '../base';

class UserClient extends BaseWCRUDClient<TUserDTO, TNewUserDTO>() {
  static getBaseUrl(): string {
    return config.apiUrl + '/users';
  }
}

export {UserClient};
