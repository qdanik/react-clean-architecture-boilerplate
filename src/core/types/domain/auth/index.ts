import {AxiosResponse} from 'axios';

export namespace Auth {
  export enum GrantType {
    Password = 'password',
    RefreshToken = 'refresh_token'
  }

  export namespace Oauth {
    export interface TokenResponse {
      access_token: string;
      token_type: string;
      refresh_token: string;
      expires_in: number;
      scope: string;
    }

    export type Response = AxiosResponse<TokenResponse>;
  }
}