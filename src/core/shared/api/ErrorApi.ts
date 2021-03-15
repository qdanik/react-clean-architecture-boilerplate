import {Api} from 'core/types';
import {inject} from 'inversify';
import {Services} from '../services';

export class ErrorApi {

  @inject(Services.HttpService.Type) protected _http: Services.HttpService

  constructor() {
    this.onError = this.onError.bind(this);

    this._http.setErrorHandler(this.onError)
  }

  onError(error: Api.IErrorResponse): Api.IErrorResponse {
    return error;
  }
}