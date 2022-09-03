import { HttpResponse } from './http.types';

export type HttpInterceptorManager<TResponse> = (
  onFulfilled?: (value: TResponse) => Promise<TResponse>,
  onRejected?: (error: TResponse) => Promise<TResponse>,
) => number;

export type HttpClientPostMethod<THttpConfig> = <TResponse, TData = unknown, TConfig = THttpConfig>(
  url: string,
  data?: TData,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientGetMethod<THttpConfig> = <TResponse, TConfig = THttpConfig>(
  url: string,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientPutMethod<THttpConfig> = <TResponse, TData = unknown, TConfig = THttpConfig>(
  url: string,
  data?: TData,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientDeleteMethod<THttpConfig> = <TResponse, TConfig = THttpConfig>(
  url: string,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientHeadMethod<THttpConfig> = <TResponse, TConfig = THttpConfig>(
  url: string,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientOptionsMethod<THttpConfig> = <TResponse, TConfig = THttpConfig>(
  url: string,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;

export type HttpClientPatchMethod<THttpConfig> = <
  TResponse,
  TData = unknown,
  TConfig = THttpConfig,
>(
  url: string,
  data?: TData,
  config?: TConfig,
) => Promise<HttpResponse<TResponse>>;
