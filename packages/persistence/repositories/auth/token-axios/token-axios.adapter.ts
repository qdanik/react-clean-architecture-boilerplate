import { AuthTokens } from '@package/domain/auth';
import { AxiosAdapter } from '@package/infrastructure/adapters';
import { HttpTokenTypes } from '@package/infrastructure/http';
import { Injectable, InjectNamed, PostConstruct } from '@package/infrastructure/ioc';
import { LocalStorageName, Storage, StorageType } from '@package/infrastructure/storage';
import { AxiosHeaders } from 'axios';

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
