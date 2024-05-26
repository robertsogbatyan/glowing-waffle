import {AxiosError, AxiosResponse} from 'axios';

type TResponseInterceptor = {
  onFulfilled?: (response: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>;
  onRejected?: (error: AxiosError) => AxiosError;
};

export {type TResponseInterceptor};
