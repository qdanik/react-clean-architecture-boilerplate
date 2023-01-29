import { AuthTokenDto } from '@package/application/auth/dto';
import { AuthToken } from '@package/domain/auth';
import { HttpClient, HttpClientType } from '@package/infrastructure/http';
import { Inject, Injectable } from '@package/infrastructure/ioc';
import { Logger, LoggerType } from '@package/infrastructure/logger';

import { AuthRepo } from './auth.repo';
import { AuthResponse } from './auth.repo.response';

@Injectable()
export class AuthRepoImpl implements AuthRepo {
  constructor(
    @Inject(LoggerType) private readonly _logger: Logger,
    @Inject(HttpClientType) private readonly _http: HttpClient,
  ) {}

  login(login: string, password: string): Promise<AuthToken> {
    const mockResponse: AuthResponse.Login = {
      access_token: `${login}_${password}`,
      expires_in: -1,
      refresh_token: `${login}_${password}`,
      scope: 'app',
      token_type: 'example',
    };
    this._logger.info('AuthRepoImpl.login', mockResponse);

    return Promise.resolve(AuthTokenDto.mapToEntity(mockResponse));
  }
}
