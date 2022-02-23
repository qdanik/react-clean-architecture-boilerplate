// Use this implementation as example
import { TokenResponse } from 'data/repositories/auth/token.response';
import { AuthToken } from 'domain/auth/entities/auth-token.entity';

export class AuthTokenDto {
  static mapToEntity(value: TokenResponse.Data): AuthToken {
    return new AuthToken(
      value.access_token,
      value.token_type,
      value.refresh_token,
      value.expires_in,
    );
  }
}
