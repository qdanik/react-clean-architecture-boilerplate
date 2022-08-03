import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { Injectable } from 'containers/config';
import { HttpClientAdapter, HttpRequestConfig } from 'core/http';

export const AxiosAbortName = Symbol('AxiosAbort');

@Injectable()
export class AxiosAbortAdapter implements HttpClientAdapter<HttpRequestConfig> {
  execute = <T>(config: HttpRequestConfig): AxiosPromise<T> => {
    const controller = new AbortController();
    try {
      const request: AxiosPromise<T> = axios.defaults.adapter(config as AxiosRequestConfig);
      request.abort = () => controller.abort();

      return request;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
