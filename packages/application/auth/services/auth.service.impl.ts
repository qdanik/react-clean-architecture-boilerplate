import { AuthToken } from '@package/domain/auth';
import { Inject, Injectable } from '@package/infrastructure/ioc';
import { AuthRepo, AuthRepoType } from '@package/persistence/repositories/auth';

import { AuthService } from './auth.service';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(@Inject(AuthRepoType) private readonly _authRepo: AuthRepo) {}

  login(login: string, password: string): Promise<AuthToken> {
    return this._authRepo.login(login, password);
  }
}
