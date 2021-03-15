import {url} from 'core/config';
import {Services} from 'core/shared';
import {IDomain} from 'core/types';
import {inject, injectable} from 'inversify';
import {AuthApi} from './AuthApi';

@injectable()
export class RefreshTokenApi {
  static Type = '@api/auth/refreshToken';

  @inject(Services.HttpService.Type) private _http: Services.HttpService;

  @inject(AuthApi.Type) private _authApi: AuthApi;

  refreshToken = (refreshToken: string): Promise<IDomain.Auth.Oauth.Response> => {
    const params = this._http.buildParams({
      grant_type: IDomain.Auth.GrantType.RefreshToken,
      refresh_token: refreshToken
    });

    return this._http
      .post<IDomain.Auth.Oauth.TokenResponse>(
        url.auth.token,
        params,
        this._authApi.getAuthOptions()
      );
  };

}