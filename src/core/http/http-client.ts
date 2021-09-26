import { ServiceIdentifier } from 'containers/core';
import { HttpInterceptorManager, HttpRequestConfig, HttpResponse } from './http.typings';

export const HttpClientType: ServiceIdentifier<HttpClient> = Symbol('HttpClient');

export interface HttpClient<THttpConfig extends HttpRequestConfig = HttpRequestConfig> {
  post<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  post<TResponse, TData = any>(url: string, data: TData): Promise<HttpResponse<TResponse>>;
  post<TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  get<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  get<TResponse, TConfig = THttpConfig>(
    url: string,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  put<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  put<TResponse, TData = any>(url: string, data: TData): Promise<HttpResponse<TResponse>>;
  put<TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  delete<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  delete<TResponse, TConfig = THttpConfig>(
    url: string,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  head<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  head<TResponse, TConfig = THttpConfig>(
    url: string,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  options<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  options<TResponse, TConfig = THttpConfig>(
    url: string,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  patch<TResponse>(url: string): Promise<HttpResponse<TResponse>>;
  patch<TResponse, TData = any>(url: string, data: TData): Promise<HttpResponse<TResponse>>;
  patch<TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): Promise<HttpResponse<TResponse>>;

  setRequestInterceptors: HttpInterceptorManager;
  setResponseInterceptors: HttpInterceptorManager;
}
