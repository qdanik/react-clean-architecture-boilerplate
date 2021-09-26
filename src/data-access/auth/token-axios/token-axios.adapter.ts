import { Inject, Injectable } from 'containers/core';
import { AxiosAdapter } from 'core/adapters';
import { HttpTokenTypes } from 'core/http';
import { LocalStorageType, Storage } from 'core/storage';
import { AUTH_TOKENS } from 'domain/auth/auth.typings';

@Injectable()
export class TokenAxiosAdapter extends AxiosAdapter {
  constructor(@Inject(LocalStorageType) private readonly _storage: Storage) {
    super();
    this._http.interceptors.request.use(config => {
      const headers = this.getHeaders();

      return {
        ...config,
        headers: {
          ...config.headers,
          ...headers,
        },
      };
    });
  }

  getHeaders(): { Authorization: string } {
    const accessToken = this._storage.get(AUTH_TOKENS.ACCESS);

    if (!accessToken) {
      throw new Error('Access token not found!');
    }

    return {
      Authorization: `${HttpTokenTypes.Bearer} ${accessToken}`,
    };
  }
}
