import { Injectable } from 'containers/core';
import { AuthToken } from 'domain/auth/entities/auth-token.entity';
import { AuthRepository } from 'domain/auth/repository/auth.repo';
import { AuthTokenDto } from 'dto/auth/auth-token.dto';
import { TokenResponse } from './token.response';

@Injectable()
export class AuthRepoAdapter implements AuthRepository {
  login(login: string, password: string): Promise<AuthToken> {
    const mockResponse: TokenResponse.Data = {
      access_token: `${login}_${password}`,
      expires_in: -1,
      refresh_token: `${login}_${password}`,
      scope: 'app',
      token_type: 'example',
    };

    return Promise.resolve(AuthTokenDto.mapToEntity(mockResponse));
  }
}
