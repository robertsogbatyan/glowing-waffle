import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {TRequestInterceptor, TResponseInterceptor} from '../../data-structures';

class BaseClient {
  protected static _axiosInstance: AxiosInstance;

  static get axiosInstance(): AxiosInstance {
    if (!this._axiosInstance) {
      this._axiosInstance = axios.create({
        headers: {
          'Content-Type': 'application/json',
        },
      });

      this._axiosInstance.interceptors.request.use(
        (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
          request.baseURL = this.getBaseUrl();

          return request;
        }
      );

      this.getRequestInterceptors().forEach((requestInterceptor: TRequestInterceptor) => {
        this._axiosInstance.interceptors.request.use(
          requestInterceptor.onFulfilled,
          requestInterceptor.onRejected
        );
      });

      this.getResponseInterceptors().forEach((responseInterceptor: TResponseInterceptor) => {
        this._axiosInstance.interceptors.response.use(
          responseInterceptor.onFulfilled,
          responseInterceptor.onRejected
        );
      });
    }

    return this._axiosInstance;
  }

  protected static getBaseUrl(): string {
    return '';
  }

  protected static getRequestInterceptors(): TRequestInterceptor[] {
    return [];
  }

  protected static getResponseInterceptors(): TResponseInterceptor[] {
    return [];
  }
}

export {BaseClient};
