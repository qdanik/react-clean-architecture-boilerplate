import { Inject, Injectable } from 'containers/config';
import { HttpClient, HttpClientType } from 'core/http';
import { Logger, LoggerType } from 'core/logger';
import { AuthTokenDto } from 'data/dto/auth';
import { AuthToken } from 'domain/auth';

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
