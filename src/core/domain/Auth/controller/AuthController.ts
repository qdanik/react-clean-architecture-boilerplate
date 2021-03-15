import {IDomain} from 'core/types';
import {inject, injectable} from 'inversify';
import {CheckTokensUseCase, SignInUseCase, SignOutUseCase} from '../usecase';

@injectable()
export class AuthController {
  static Type = '@controller/auth';

  @inject(SignInUseCase.Type) private _signInUseCase: SignInUseCase;

  @inject(SignOutUseCase.Type) private _signOutUseCase: SignOutUseCase;

  @inject(CheckTokensUseCase.Type) private _checkTokensUseCase: CheckTokensUseCase;

  checkTokens = (): void => {
    this._checkTokensUseCase.execute();
  };

  signIn(email: string, password: string): Promise<IDomain.Auth.Oauth.Response> {
    return this._signInUseCase.execute(email, password);
  }

  signOut(): void {
    this._signOutUseCase.execute();
  }
}
