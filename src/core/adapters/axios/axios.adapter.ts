import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { Inject, Injectable, PostConstruct } from 'containers/config';
import { HttpClient, HttpInterceptorManager } from 'core/http';
import { I18n, I18nType } from 'core/i18n';
import { Logger, LoggerType } from 'core/logger';
import { clearUrl, getBackendUrl } from 'core/utils';

@Injectable()
export class AxiosAdapter implements HttpClient<AxiosRequestConfig> {
  protected _http: AxiosInstance;

  constructor(
    @Inject(LoggerType) private readonly _logger: Logger,
    @Inject(I18nType) private readonly _i18n: I18n,
    private readonly baseUrl: string = getBackendUrl(),
  ) {}

  @PostConstruct()
  initialize(): void {
    const config = this.getConfig();
    this._http = axios.create(config);
    this.setResponseInterceptors(value => Promise.resolve(value), this._errorInterceptor);
  }

  private _errorInterceptor = (error: AxiosResponse): Promise<AxiosResponse> => {
    const {
      config: { method, url, data = null },
    } = error;
    this._logger?.error(`[AxiosAdapter.${method}]`, { data, url });

    return Promise.reject(error);
  };

  private _getUrl = (url: string): string => {
    return new URL(clearUrl(`${this.baseUrl}${url}`)).toString();
  };

  getConfig = (): AxiosRequestConfig => {
    return {
      headers: {
        'Accept-Language': this._i18n?.getLanguage(),
      },
      withCredentials: true,
    };
  };

  getXmlConfig = (): AxiosRequestConfig => {
    const defaultConfig = this.getConfig();

    return {
      ...defaultConfig,
      headers: {
        ...defaultConfig.headers,
        'X-Requested-With': 'XMLHttpRequest',
      },
    };
  };

  delete<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.delete<T, R>(this._getUrl(url), config);
  }

  get<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.get<T, R>(this._getUrl(url), config);
  }

  head<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.head<T, R>(this._getUrl(url), config);
  }

  options<T = unknown, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._http.options<T, R>(this._getUrl(url), config);
  }

  patch<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.patch<T, R>(this._getUrl(url), data, config);
  }

  post<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.post<T, R>(this._getUrl(url), data, config);
  }

  put<T = unknown, D = unknown, R = AxiosResponse<T>>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this._http.put<T, R>(this._getUrl(url), data, config);
  }

  setResponseInterceptors: HttpInterceptorManager<AxiosResponse> = (
    responseInterceptor,
    errorInterceptor,
  ) => {
    return this._http.interceptors.response.use(responseInterceptor, errorInterceptor);
  };
}
