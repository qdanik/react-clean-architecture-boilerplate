import {Adapters, Services} from 'core/shared';
import {Store} from 'core/store';
import {Cookie, IDomain, Storage} from 'core/types';
import {inject, injectable} from 'inversify';
import {RefreshTokenApi} from '../api';

@injectable()
export class RefreshTokenGateway {
  static Type = "@gateway/auth/refreshToken";
  
  @inject(RefreshTokenApi.Type) private _refreshTokenApi: RefreshTokenApi;

  @inject(Adapters.CookieAdapter.Type) private _cookie: Adapters.CookieAdapter;

  @inject(Services.StorageService.Type) private _storage: Services.StorageService;

  @inject(Store.Type) private _store: Store.IStore;

  private _onStorageChange(): void {
    const isLoggedIn = JSON.parse(this._storage.get(Storage.Keys.LoggedIn));

    if (!isLoggedIn) {
      this.resetTokens();
    }
  }

  private _setLoggedIn(token: string): void {
    this._store.user.setToken(token);
    
    this._storage.set(Storage.Keys.LoggedIn, 'true');
  }

  public async refreshToken(): Promise<void> {
    const response = await this._refreshTokenApi.refreshToken(
      this._cookie.get(Cookie.Keys.RefreshToken)
    );
    this.setTokens(response);
  }

  checkTokens = (): () => void => {
    this._storage.subscribe(this._onStorageChange);

    const accessToken = this._cookie.get(Cookie.Keys.AccessToken);
    const refreshToken = this._cookie.get(Cookie.Keys.RefreshToken);

    if (accessToken) {
      this._setLoggedIn(accessToken);
    } else if (refreshToken) {
      this.refreshToken();
    }

    return (): void => {
      this._storage.unsubscribe(this._onStorageChange);
    };
  };

  resetTokens(): void {
    this._storage.set(Storage.Keys.LoggedIn, 'false');
    this._store.user.setToken(null);
    this._cookie
      .remove(Cookie.Keys.AccessToken)
      .remove(Cookie.Keys.RefreshToken);
  }

  setTokens(response: IDomain.Auth.Oauth.Response): IDomain.Auth.Oauth.Response {
    const {
      data: {
        access_token,
        refresh_token,
        expires_in
      }
    } = response;
    const options = {
      maxAge: expires_in
    };

    this._cookie
      .set(Cookie.Keys.AccessToken, access_token, options)
      .set(Cookie.Keys.RefreshToken, refresh_token);

    this._setLoggedIn(access_token);

    return response;
  }

}