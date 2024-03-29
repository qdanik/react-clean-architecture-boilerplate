import { AxiosPromise } from 'axios';

import { ServiceIdentifier } from 'containers/config';

import { HttpRequestConfig } from './http.types';
import {
  HttpClientDeleteMethod,
  HttpClientGetMethod,
  HttpClientHeadMethod,
  HttpClientOptionsMethod,
  HttpClientPatchMethod,
  HttpClientPostMethod,
  HttpClientPutMethod,
} from './http-method.types';

export const HttpClientType: ServiceIdentifier<HttpClient> = Symbol('HttpClient');
export const HttpClientAdapterType: ServiceIdentifier<HttpClientAdapter<HttpRequestConfig>> =
  Symbol('HttpClientAdapter');

export interface HttpClient<THttpConfig extends HttpRequestConfig = HttpRequestConfig> {
  getConfig: () => THttpConfig;

  post: HttpClientPostMethod<THttpConfig>;
  get: HttpClientGetMethod<THttpConfig>;
  put: HttpClientPutMethod<THttpConfig>;
  delete: HttpClientDeleteMethod<THttpConfig>;
  head: HttpClientHeadMethod<THttpConfig>;
  options: HttpClientOptionsMethod<THttpConfig>;
  patch: HttpClientPatchMethod<THttpConfig>;
}

export interface HttpClientAdapter<C extends HttpRequestConfig> {
  execute: <T = unknown>(config: C) => AxiosPromise<T>;
}
