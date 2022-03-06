import { Inject, Injectable } from 'containers/config';
import { AuthRepoType, AuthRepo } from 'data/repositories/auth';
import { AuthService } from './auth.service';
import { AuthToken } from '../entities/auth-token.entity';

@Injectable()
export class AuthServiceImpl implements AuthService {
  constructor(@Inject(AuthRepoType) private readonly _authRepo: AuthRepo) {}

  login(login: string, password: string): Promise<AuthToken> {
    return this._authRepo.login(login, password);
  }
}
