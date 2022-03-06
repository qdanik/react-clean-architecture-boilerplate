import axios, { AxiosRequestConfig } from 'axios';
import { Injectable } from 'containers/config';
import { AbortPromise, HttpClientAdapter } from 'core/http';

export const AxiosAbortName = Symbol('AxiosAbort');

@Injectable()
export class AxiosAbortAdapter implements HttpClientAdapter<AxiosRequestConfig> {
  execute = (config: AxiosRequestConfig): AbortPromise<any> => {
    const controller = new AbortController();
    try {
      const request: AbortPromise<any> = axios.defaults.adapter(config);
      request.abort = () => controller.abort();

      return request;
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
