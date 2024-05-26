import {AxiosError, InternalAxiosRequestConfig} from 'axios';

type TRequestInterceptor = {
  onFulfilled?: (
    request: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  onRejected?: (error: AxiosError) => AxiosError;
};

export {type TRequestInterceptor};
