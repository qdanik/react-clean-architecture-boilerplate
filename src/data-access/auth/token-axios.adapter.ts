import { ServiceIdentifier } from '@app/containers/typings';
import { AxiosAdapter } from '@app/core/adapters';
import { HttpClient, TokenTypes } from '@app/core/http';
import { AUTH_STORAGE_KEY, LocalStorageType, Storage } from '@app/core/storage';
import { inject, injectable } from 'inversify';

export const TokenHttpClientType: ServiceIdentifier<HttpClient> = Symbol('TokenHttpClient');

@injectable()
export class TokenAxiosAdapter extends AxiosAdapter {
  constructor(@inject(LocalStorageType) private readonly _storage: Storage) {
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
    const accessToken = this._storage.get(AUTH_STORAGE_KEY);

    if (!accessToken) {
      //TODO: handling this situation
    }

    return {
      Authorization: `${TokenTypes.Bearer} ${accessToken}`,
    };
  }
}
