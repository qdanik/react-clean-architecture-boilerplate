import axios, {AxiosInstance} from 'axios';
import {injectable} from 'inversify';

@injectable()
export class HttpAdapter {
  static Type = '@adapter/http';

  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      withCredentials: true,
    })
  }

  setErrorHandler(errorCallback: (error: any) => any): void {
    this.http.interceptors.response.use(
      response => response,
      errorCallback
    )
  }
}

