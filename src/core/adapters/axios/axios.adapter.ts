import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Inject, Injectable, Named, PostConstruct } from 'containers/config';
import {
  HttpClient,
  HttpClientAdapter,
  HttpClientAdapterType,
  HttpInterceptorManager,
} from 'core/http';
import { Logger, LoggerType } from 'core/logger';

import { AxiosMemoName } from './axios-memo.adapter';

@Injectable()
export class AxiosAdapter implements HttpClient<AxiosRequestConfig> {
  protected _http: AxiosInstance;

  constructor(
    @Inject(HttpClientAdapterType)
    @Named(AxiosMemoName)
    protected readonly _memoAdapter: HttpClientAdapter<AxiosRequestConfig>,
    @Inject(LoggerType) private readonly _logger: Logger,
  ) {}

  @PostConstruct()
  initialize(): void {
    const config = this.getConfig();
    this._http = axios.create(config);
    this.setResponseInterceptors(null, this._errorInterceptor);
  }

  private _errorInterceptor = (error: AxiosResponse): Promise<AxiosResponse> => {
    const {
      config: { method, url, data = null },
    } = error;
    this._logger?.error(`[AxiosAdapter.${method}]`, { data, url });

    return Promise.reject(error);
  };

  getConfig = (): AxiosRequestConfig => {
    const adapter = this._memoAdapter.execute;

    return {
      adapter,
      withCredentials: true,
    };
  };

  delete<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.delete<T, R>(url, config);
  }

  get<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.get<T, R>(url, config);
  }

  head<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.head<T, R>(url, config);
  }

  options<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.options<T, R>(url, config);
  }

  patch<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.patch<T, R>(url, data, config);
  }

  post<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.post<T, R>(url, data, config);
  }

  put<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.put<T, R>(url, data, config);
  }

  setRequestInterceptors: HttpInterceptorManager<AxiosResponse> = (
    requestInterceptor,
    errorInterceptor,
  ): number => {
    return this._http.interceptors.request.use(requestInterceptor, errorInterceptor);
  };

  setResponseInterceptors: HttpInterceptorManager<AxiosResponse> = (
    responseInterceptor,
    errorInterceptor,
  ) => {
    return this._http.interceptors.response.use(responseInterceptor, errorInterceptor);
  };
}
