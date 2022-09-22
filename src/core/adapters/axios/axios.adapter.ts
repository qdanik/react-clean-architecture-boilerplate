import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { HttpClient, HttpInterceptorManager } from 'core/http';

import { useAxiosMemoAdapter } from './axios-memo.adapter';

export const useAxiosAdapter = (): HttpClient<AxiosRequestConfig> => {
  const memoAdapter = useAxiosMemoAdapter();
  const [http, setHttp] = useState<AxiosInstance>(null);

  const getConfig = useCallback((): AxiosRequestConfig => {
    const adapter = memoAdapter.execute;

    return {
      adapter,
      withCredentials: true,
    };
  }, [memoAdapter.execute]);

  const defaultErrorInterceptor = (error: AxiosResponse): Promise<AxiosResponse> => {
    // const {
    // config: { method, url, data = null },
    // } = error;
    // this._logger?.error(`[AxiosAdapter.${method}]`, { data, url });

    return Promise.reject(error);
  };

  const get = useCallback(
    <T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
      return http.get<T, R>(url, config);
    },
    [http],
  );

  const head = useCallback(
    <T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
      return http.head<T, R>(url, config);
    },
    [http],
  );

  const options = useCallback(
    <T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> => {
      return http.options<T, R>(url, config);
    },
    [http],
  );

  const patch = useCallback(
    <T = unknown, D = unknown, R = AxiosResponse<T>>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
    ): Promise<R> => {
      return http.patch<T, R>(url, data, config);
    },
    [http],
  );

  const post = useCallback(
    <T = unknown, D = unknown, R = AxiosResponse<T>>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
    ): Promise<R> => {
      return http.post<T, R>(url, data, config);
    },
    [http],
  );

  const put = useCallback(
    <T = unknown, D = unknown, R = AxiosResponse<T>>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig,
    ): Promise<R> => {
      return http.put<T, R>(url, data, config);
    },
    [http],
  );

  const setRequestInterceptors: HttpInterceptorManager<AxiosResponse> = useCallback(
    (requestInterceptor, errorInterceptor): number => {
      return http.interceptors.request.use(requestInterceptor, errorInterceptor);
    },
    [http],
  );

  const setResponseInterceptors: HttpInterceptorManager<AxiosResponse> = useCallback(
    (responseInterceptor, errorInterceptor) => {
      return http.interceptors.response.use(responseInterceptor, errorInterceptor);
    },
    [http],
  );

  useEffect(() => {
    setHttp(axios.create(getConfig()));
    setResponseInterceptors(null, defaultErrorInterceptor);
  }, [getConfig, setResponseInterceptors]);

  return {
    delete: http.delete,
    get,
    getConfig,
    head,
    options,
    patch,
    post,
    put,
    setRequestInterceptors,
    setResponseInterceptors,
  };
};
