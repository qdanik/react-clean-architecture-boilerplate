import {IDomain} from 'core/types';
import {inject, injectable} from 'inversify';
import {SignInGateway} from '../gateway';

@injectable()
export class SignInUseCase {
  static Type = '@useCase/auth/signIn';
  
  @inject(SignInGateway.Type) private _signInGateway: SignInGateway;

  execute(email: string, password: string): Promise<IDomain.Auth.Oauth.Response> {
    return this._signInGateway.signIn(email, password)
  }
}