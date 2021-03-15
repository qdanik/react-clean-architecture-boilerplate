import {inject, injectable} from 'inversify';
import {SignOutGateway} from '../gateway';

@injectable()
export class SignOutUseCase {
  static Type = '@useCase/auth/signOut';

  @inject(SignOutGateway.Type) private _signOutGateway: SignOutGateway;

  execute(): void {
    this._signOutGateway.signOut()
  }
}