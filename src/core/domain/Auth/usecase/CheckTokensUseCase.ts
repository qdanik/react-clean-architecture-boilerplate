import {inject, injectable} from 'inversify';
import {RefreshTokenGateway} from '../gateway';

@injectable()
export class CheckTokensUseCase {
  static Type = '@useCase/auth/checkTokens';

  @inject(RefreshTokenGateway.Type) private _refreshTokenGateway: RefreshTokenGateway;

  execute(): void {
    this._refreshTokenGateway.checkTokens()
  }
}