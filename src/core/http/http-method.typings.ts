import { AbortPromise } from '.';
import { HttpResponse } from './http.typings';

export type HttpRejectInterceptor = {
  (error: Error): Error;
  <TError>(error: TError): TError;
};

export type HttpFulfilledInterceptor = {
  <V>(value: V): V;
  <V>(value: V): Promise<V>;
};

export type HttpInterceptorManager = {
  (): number;
  (onFulfilled: HttpFulfilledInterceptor): number;
  (onFulfilled: HttpFulfilledInterceptor, onRejected: HttpRejectInterceptor): number;
};

export interface HttpClientPostMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any>(url: string, data: TData): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): AbortPromise<HttpResponse<TResponse>>;
}

export interface HttpClientGetMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TConfig = THttpConfig>(url: string, config: TConfig): AbortPromise<
    HttpResponse<TResponse>
  >;
}

export interface HttpClientPutMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any>(url: string, data: TData): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): AbortPromise<HttpResponse<TResponse>>;
}

export interface HttpClientDeleteMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TConfig = THttpConfig>(url: string, config: TConfig): AbortPromise<
    HttpResponse<TResponse>
  >;
}

export interface HttpClientHeadMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TConfig = THttpConfig>(url: string, config: TConfig): AbortPromise<
    HttpResponse<TResponse>
  >;
}

export interface HttpClientOptionsMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TConfig = THttpConfig>(url: string, config: TConfig): AbortPromise<
    HttpResponse<TResponse>
  >;
}

export interface HttpClientPatchMethod<THttpConfig> {
  <TResponse>(url: string): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any>(url: string, data: TData): AbortPromise<HttpResponse<TResponse>>;
  <TResponse, TData = any, TConfig = THttpConfig>(
    url: string,
    data: TData,
    config: TConfig,
  ): AbortPromise<HttpResponse<TResponse>>;
}
