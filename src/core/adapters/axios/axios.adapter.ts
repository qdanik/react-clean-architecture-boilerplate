import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Inject, Injectable, Named, PostConstruct } from 'containers/config';
import {
  AbortPromise,
  HttpClient,
  HttpClientAdapter,
  HttpClientAdapterType,
  HttpFulfilledInterceptor,
  HttpInterceptorManager,
  HttpRejectInterceptor,
} from 'core/http';
import { AxiosMemoName } from './axios-memo.adapter';

@Injectable()
export class AxiosAdapter implements HttpClient<AxiosRequestConfig> {
  protected _http: AxiosInstance;

  constructor(
    @Inject(HttpClientAdapterType)
    @Named(AxiosMemoName)
    private readonly _memoAdapter: HttpClientAdapter<AxiosRequestConfig>,
  ) {}

  @PostConstruct()
  initialize(): void {
    const config = this.getConfig();
    this._http = axios.create(config);
  }

  getConfig = (): AxiosRequestConfig => {
    const adapter = this._memoAdapter.execute;

    return {
      adapter,
      withCredentials: true,
    };
  };

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): AbortPromise<R> {
    return this._http.delete<T, R>(url, config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): AbortPromise<R> {
    return this._http.get<T, R>(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): AbortPromise<R> {
    return this._http.head<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): AbortPromise<R> {
    return this._http.options<T, R>(url, config);
  }

  patch<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AbortPromise<R> {
    return this._http.patch<T, R>(url, data, config);
  }

  post<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AbortPromise<R> {
    return this._http.post<T, R>(url, data, config);
  }

  put<T = any, D = any, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): AbortPromise<R> {
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
