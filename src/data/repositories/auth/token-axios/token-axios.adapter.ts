import { AxiosHeaders } from 'axios';

import { Injectable, InjectNamed, PostConstruct } from 'containers/config';
import { AxiosAdapter } from 'core/adapters';
import { HttpTokenTypes } from 'core/http';
import { LocalStorageName, Storage, StorageType } from 'core/storage';
import { AuthTokens } from 'domain/auth';

@Injectable()
export class TokenAxiosAdapter extends AxiosAdapter {
  @InjectNamed(StorageType, LocalStorageName) private readonly _storage: Storage;

  @PostConstruct()
  initialize(): void {
    this._http.interceptors.request.use(config => {
      const headers = this._getHeaders(config?.headers as AxiosHeaders);

      return {
        ...config,
        headers,
      };
    });
  }

  private _getHeaders(headers?: AxiosHeaders): AxiosHeaders {
    const accessToken = this._storage.get(AuthTokens.ACCESS);

    if (!accessToken || !headers) {
      throw new Error('Access token not found!');
    }

    headers.set('Authorization', `${HttpTokenTypes.Bearer} ${accessToken}`);

    return headers;
  }
}
