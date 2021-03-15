import {Store} from 'core/store';
import {IDomain} from 'core/types';
import {inject, injectable} from 'inversify';
import {RefreshTokenGateway} from './RefreshTokenGateway';
import {SignInApi} from '../api';

@injectable()
export class SignInGateway {
  static Type = "@gateway/auth/signIn";

  @inject(SignInApi.Type) private _signInApi: SignInApi;

  @inject(RefreshTokenGateway.Type) private _refreshTokenGateway: RefreshTokenGateway;

  @inject(Store.Type) private _store: Store.IStore;

  public async signIn(email: string, password: string): Promise<IDomain.Auth.Oauth.Response> {
    try {
      const response = await this._signInApi
        .signIn(
          email,
          password
        );
      this._refreshTokenGateway.setTokens(response);

      return response;
    } catch(e) {
      return e;
    }
  }
}