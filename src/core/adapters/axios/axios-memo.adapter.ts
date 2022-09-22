import { AxiosPromise } from 'axios';

import { HttpClientAdapter, HttpRequestConfig } from 'core/http';

import { useAxiosAbortAdapter } from './axios-abort.adapter';

const requests = new Map<string, Promise<unknown>>();

function getKey(config: HttpRequestConfig): string {
  return JSON.stringify({
    data: config?.data,
    method: config?.method,
    params: config?.params,
    url: config?.url,
  });
}

export const useAxiosMemoAdapter = (): HttpClientAdapter<HttpRequestConfig> => {
  const abortAdapter = useAxiosAbortAdapter();

  const execute = <T>(config: HttpRequestConfig): AxiosPromise<T> => {
    const key = getKey(config);
    try {
      const executeAbortAdapter = () => abortAdapter.execute<T>(config);

      if (config.headers?.cached) {
        if (!requests.has(key)) {
          requests.set(key, executeAbortAdapter());
        }

        return requests.get(key) as AxiosPromise<T>;
      }

      if (requests.has(key)) {
        requests.delete(key);
      }

      return executeAbortAdapter();
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return { execute };
};
