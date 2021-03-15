import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {Adapters} from 'core/shared/adapters';
import {injectable} from 'inversify';
import forEach from 'lodash/forEach';

@injectable()
export class HttpService {

  static Type = '@service/http';
  
  constructor(private _adapter = new Adapters.HttpAdapter()) {}

  buildParams(data: Record<string, string>): URLSearchParams {
    const params = new URLSearchParams();

    forEach(data, (value, key) => {
      params.append(key, value)
    })
    
    return params;
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.delete<T, R>(url, config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.get<T, R>(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.head<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.options<T, R>(url, config);
  }

  patch<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.patch<T, R>(url, data, config);
  }

  post<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.post<T, R>(url, data, config);
  }

  put<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this._adapter.http.put<T, R>(url, data, config);
  }

  setErrorHandler(callback: (error: any) => any): void {
    this._adapter.setErrorHandler(callback);
  }
  
}