import {AxiosRequestConfig} from 'axios';
import {BasicToken} from 'core/constants';
import {Http} from 'core/types';
import {injectable} from 'inversify';

@injectable()
export class AuthApi {
  static Type = '@api/auth/shared';

  _getAuthorization(value: string, type: Http.TokenTypes): string {
    return `${type} ${value}`;
  }

  getAuthOptions(): AxiosRequestConfig {
    return {
      headers: {
        Authorization: this._getAuthorization(BasicToken, Http.TokenTypes.Basic)
      }
    };
  }

}