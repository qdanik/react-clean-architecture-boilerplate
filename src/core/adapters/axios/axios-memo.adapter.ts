import { AxiosRequestConfig } from 'axios';
import { Inject, Injectable, Named } from 'containers/config';
import { AbortPromise, HttpClientAdapter, HttpClientAdapterType } from 'core/http';
import { AxiosAbortName } from './axios-abort.adapter';

export const AxiosMemoName = Symbol('AxiosMemo');

@Injectable()
export class AxiosMemoAdapter implements HttpClientAdapter<AxiosRequestConfig> {
  private _requests = new Map<string, Promise<any>>();

  constructor(
    @Inject(HttpClientAdapterType)
    @Named(AxiosAbortName)
    private readonly _abortAdapter: HttpClientAdapter<AxiosRequestConfig>,
  ) {}

  static getKey(config: AxiosRequestConfig): string {
    return JSON.stringify({
      data: config?.data,
      method: config?.method,
      params: config?.params,
      url: config?.url,
    });
  }

  execute = (config: AxiosRequestConfig): AbortPromise<any> => {
    const key = AxiosMemoAdapter.getKey(config);
    try {
      const execute = () => this._abortAdapter.execute(config);

      if (config.headers?.cached) {
        if (!this._requests.has(key)) {
          this._requests.set(key, execute());
        }

        return this._requests.get(key);
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
