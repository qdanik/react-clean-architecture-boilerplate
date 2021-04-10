import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {injectable} from 'inversify';
import {HttpAdapter, HttpErrorCallback} from 'typings/http';

@injectable()
export class AxiosAdapter implements HttpClient<AxiosInstance, AxiosRequestConfig> {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      withCredentials: true,
    })
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.head<T, R>(url, config);
  }

  options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.options<T, R>(url, config);
  }

  patch<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  post<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, D = any, R = AxiosResponse<T>>(url: string, data?: D, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  setErrorHandler(errorCallback: HttpErrorCallback): void {
    this.http.interceptors.response.use(
      response => response,
      errorCallback
    )
  }
}

