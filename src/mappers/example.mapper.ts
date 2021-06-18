// Use this implementation as example

import { TokenResponse } from 'data-access/auth/token.response';
import { AuthToken } from 'domain/auth/entities/auth.entity';

export class TokenMapper {
  static mapToDomain(value: TokenResponse): AuthToken {
    return new AuthToken(
      value.access_token,
      value.token_type,
      value.refresh_token,
      value.expires_in,
      value.scope,
    );
  }
}
