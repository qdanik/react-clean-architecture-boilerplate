import {inject, injectable} from 'inversify';
import {RefreshTokenGateway} from './RefreshTokenGateway';
import {SignOutApi} from '../api';

@injectable()
export class SignOutGateway {
  static Type = "@gateway/auth/signOut";

  @inject(SignOutApi.Type) private _signOutApi: SignOutApi;

  @inject(RefreshTokenGateway.Type) private _refreshTokenGateway: RefreshTokenGateway;

  public async signOut(): Promise<void> {
    try {
      await this._signOutApi.logout();
      this._refreshTokenGateway.resetTokens();
    } catch (e) {
      return;
    }
  }

}