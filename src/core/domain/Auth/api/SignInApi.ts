import {url} from 'core/config';
import {Services} from 'core/shared';
import {IDomain} from 'core/types';
import {inject, injectable} from 'inversify';
import {AuthApi} from './AuthApi';

@injectable()
export class SignInApi {
  static Type = '@api/auth/signIn';

  @inject(Services.HttpService.Type) private _http: Services.HttpService;

  @inject(AuthApi.Type) private _authApi:AuthApi;

  signIn = (email: string, password: string): Promise<IDomain.Auth.Oauth.Response> => {
    const params = this._http.buildParams({
      grant_type: IDomain.Auth.GrantType.Password,
      password,
      username: email
    });

    return this._http
      .post<IDomain.Auth.Oauth.TokenResponse>(
        url.auth.token,
        params,
        this._authApi.getAuthOptions()
      );
  };

}