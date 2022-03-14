import axios, { AxiosRequestConfig } from 'axios';
import { Injectable } from 'containers/config';
import { AbortPromise, HttpClientAdapter, HttpRequestConfig } from 'core/http';

export const AxiosAbortName = Symbol('AxiosAbort');

@Injectable()
export class AxiosAbortAdapter implements HttpClientAdapter<HttpRequestConfig> {
  execute = <T>(config: HttpRequestConfig): AbortPromise<T> => {
    const controller = new AbortController();
    try {
      const request = axios.defaults.adapter(
        config as AxiosRequestConfig,
      ) as unknown as AbortPromise<T>;
      request.abort = () => controller.abort();

      return request;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
