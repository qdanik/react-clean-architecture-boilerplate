import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

import { HttpClientAdapter, HttpRequestConfig } from 'core/http';

export const useAxiosAbortAdapter = (): HttpClientAdapter<HttpRequestConfig> => {
  const execute = <T>(config: HttpRequestConfig): AxiosPromise<T> => {
    const controller = new AbortController();
    try {
      const request: AxiosPromise<T> = axios.defaults.adapter(config as AxiosRequestConfig);
      request.abort = () => controller.abort();

      return request;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return {
    execute,
  };
};
