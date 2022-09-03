import { HttpResponse } from './http.types';

export type HttpRejectInterceptor<TError extends unknown = Error> = (
  error: TError,
) => TError | Promise<TError>;

export type HttpFulfilledInterceptor<TResult extends unknown = object> = (
  error: TResult,
) => TResult | Promise<TResult>;

export type HttpInterceptorManager = (
  onFulfilled?: HttpFulfilledInterceptor,
  onRejected?: HttpRejectInterceptor,
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
