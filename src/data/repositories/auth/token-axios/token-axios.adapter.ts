import { AxiosRequestConfig } from 'axios';

import { Injectable, InjectNamed, PostConstruct } from 'containers/config';
import { AxiosAdapter } from 'core/adapters';
import { HttpTokenTypes } from 'core/http';
import { LocalStorageName, Storage, StorageType } from 'core/storage';
import { AuthTokens } from 'domain/auth';

type AxiosRequestHeaders = AxiosRequestConfig['headers'];

@Injectable()
export class TokenAxiosAdapter extends AxiosAdapter {
  @InjectNamed(StorageType, LocalStorageName) private readonly _storage: Storage;

  @PostConstruct()
  initialize(): void {
    this._http.interceptors.request.use(config => {
      const headers = this._getHeaders(config?.headers);

      return {
        ...config,
        headers,
      };
    });
  }

  private _getHeaders(headers: AxiosRequestHeaders = {}): AxiosRequestHeaders {
    const accessToken = this._storage.get(AuthTokens.ACCESS);

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    return {
      ...headers,
      Authorization: `${HttpTokenTypes.Bearer} ${accessToken}`,
    };
  }
}
