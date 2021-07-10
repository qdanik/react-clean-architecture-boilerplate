import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Injectable } from 'containers/core';
import {
  HttpClient,
  HttpFulfilledInterceptor,
  HttpInterceptorManager,
  HttpRejectInterceptor,
} from 'core/http';

@Injectable()
export class AxiosAdapter implements HttpClient<AxiosRequestConfig> {
  protected _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      withCredentials: true,
    });
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.delete<T, R>(url, config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.get<T, R>(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.head<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.options<T, R>(url, config);
  }

  patch<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.patch<T, R>(url, data, config);
  }

  post<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.post<T, R>(url, data, config);
  }

  put<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.put<T, R>(url, data, config);
  }

  setRequestInterceptors: HttpInterceptorManager = (
    requestInterceptor?: HttpFulfilledInterceptor,
    errorInterceptor?: HttpRejectInterceptor,
  ): number => {
    return this._http.interceptors.request.use(requestInterceptor, errorInterceptor);
  };

  setResponseInterceptors: HttpInterceptorManager = (
    responseInterceptor?: HttpFulfilledInterceptor,
    errorInterceptor?: HttpRejectInterceptor,
  ): number => {
    return this._http.interceptors.response.use(responseInterceptor, errorInterceptor);
  };
}
