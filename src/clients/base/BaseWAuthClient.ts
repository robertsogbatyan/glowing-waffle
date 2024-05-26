import {TRequestInterceptor} from '../../data-structures';
import {AuthRequestInterceptor} from '../interceptors/AuthRequestInterceptor';
import {BaseClient} from './BaseClient';

class BaseWAuthClient extends BaseClient {
  protected static getRequestInterceptors(): TRequestInterceptor[] {
    return [...super.getRequestInterceptors(), AuthRequestInterceptor];
  }
}

export {BaseWAuthClient};
