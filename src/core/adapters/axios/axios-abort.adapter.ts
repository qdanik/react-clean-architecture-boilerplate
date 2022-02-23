import httpAdapter from 'axios/lib/adapters/http';
import { AxiosAdapter, AxiosRequestConfig } from 'axios';
import { Injectable } from 'containers/config';
import { AbortPromise, HttpClientAdapter } from 'core/http';

export const AxiosAbortName = Symbol('AxiosAbort');

@Injectable()
export class AxiosAbortAdapter implements HttpClientAdapter<AxiosRequestConfig> {
  execute: AxiosAdapter = (config: AxiosRequestConfig): AbortPromise<any> => {
    const controller = new AbortController();
    try {
      const request = httpAdapter(config);
      request.abort = () => controller.abort();

      return request;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
