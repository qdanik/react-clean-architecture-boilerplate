import { Inject, Injectable } from 'containers/config';
import { AuthRepo, AuthRepoType } from 'data/repositories/auth';

import { AuthToken } from '../entities/auth-token.entity';
import { AuthService } from './auth.service';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(@Inject(AuthRepoType) private readonly _authRepo: AuthRepo) {}

  login(login: string, password: string): Promise<AuthToken> {
    return this._authRepo.login(login, password);
  }
}
