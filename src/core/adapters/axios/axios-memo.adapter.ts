import { AxiosPromise } from 'axios';

import { Inject, Injectable, Named } from 'containers/config';
import { HttpClientAdapter, HttpClientAdapterType, HttpRequestConfig } from 'core/http';

import { AxiosAbortName } from './axios-abort.adapter';

export const AxiosMemoName = Symbol('AxiosMemo');

@Injectable()
export class AxiosMemoAdapter implements HttpClientAdapter<HttpRequestConfig> {
  private _requests = new Map<string, Promise<unknown>>();

  constructor(
    @Inject(HttpClientAdapterType)
    @Named(AxiosAbortName)
    private readonly _abortAdapter: HttpClientAdapter<HttpRequestConfig>,
  ) {}

  static getKey(config: HttpRequestConfig): string {
    return JSON.stringify({
      data: config?.data,
      method: config?.method,
      params: config?.params,
      url: config?.url,
    });
  }

  execute = <T>(config: HttpRequestConfig): AxiosPromise<T> => {
    const key = AxiosMemoAdapter.getKey(config);
    try {
      const execute = () => this._abortAdapter.execute<T>(config);

      if (config.headers?.cached) {
        if (!this._requests.has(key)) {
          this._requests.set(key, execute());
        }

        return this._requests.get(key) as AxiosPromise<T>;
      }

      if (this._requests.has(key)) {
        this._requests.delete(key);
      }

      return execute();
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
