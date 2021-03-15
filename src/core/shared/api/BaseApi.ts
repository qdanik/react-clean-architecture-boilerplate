import {AxiosResponse} from 'axios';
import {Api} from 'core/types';
import {inject} from 'inversify';
import {ErrorApi} from './ErrorApi';
import {Services} from '../services';

export class BaseApi<TBody, TResponse> extends ErrorApi {
  private _url = null;

  @inject(Services.HttpService.Type) protected _http: Services.HttpService

  createMany(data: TBody[]): Promise<AxiosResponse<any>> {
    return this._http.post(this._url, data);
  }

  createOne(data: TBody): Promise<AxiosResponse<any>> {
    return this._http.post(this._url, data);
  }

  deleteById(id: string): Promise<AxiosResponse<any>> {
    return this._http.delete(`${this._url}${id}`);
  }

  get(id = ''): Promise<AxiosResponse<TResponse>> {
    return this._http.get<TResponse>(`${this._url}${id}`);
  }

  getList(params?: Api.IListParams): Promise<AxiosResponse<TResponse>> {
    return this._http.get<TResponse>(`${this._url}`, {
      params
    });
  }

  update(data: TBody): Promise<AxiosResponse<any>> {
    return this._http.put(this._url, data);
  } 
  
}