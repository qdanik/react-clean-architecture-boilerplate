import { AxiosPromise } from 'axios';

import { ServiceIdentifier } from 'containers/config';

import { HttpRequestConfig, HttpResponse } from './http.types';
import {
  HttpClientDeleteMethod,
  HttpClientGetMethod,
  HttpClientHeadMethod,
  HttpClientOptionsMethod,
  HttpClientPatchMethod,
  HttpClientPostMethod,
  HttpClientPutMethod,
  HttpInterceptorManager,
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

  setRequestInterceptors: HttpInterceptorManager<HttpResponse>;
  setResponseInterceptors: HttpInterceptorManager<HttpResponse>;
}

export interface HttpClientAdapter<C extends HttpRequestConfig> {
  execute: <T = unknown>(config: C) => AxiosPromise<T>;
}
