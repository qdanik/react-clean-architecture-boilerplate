import {AxiosResponse} from 'axios';

export enum GrantType {
  Password = 'password',
  RefreshToken = 'refresh_token'
}

export interface TokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

export type AuthResponse = AxiosResponse<TokenResponse>;