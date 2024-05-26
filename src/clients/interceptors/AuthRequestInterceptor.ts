import {InternalAxiosRequestConfig} from 'axios';
import {TRequestInterceptor} from '../../data-structures';

const AuthRequestInterceptor: TRequestInterceptor = {
  onFulfilled: async (request: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
    if (request.headers) {
      // TODO: add receive access token real functionality here
      const accessToken: string = await Promise.resolve('accessToken');

      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return request;
  },
};

export {AuthRequestInterceptor};
