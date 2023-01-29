import { AuthToken } from '@package/domain/auth';
import { AuthResponse } from '@package/persistence/repositories/auth';

export class AuthTokenDto {
  static mapToEntity(value: AuthResponse.Login): AuthToken {
    return new AuthToken(
      value.access_token,
      value.token_type,
      value.refresh_token,
      value.expires_in,
    );
  }
}
