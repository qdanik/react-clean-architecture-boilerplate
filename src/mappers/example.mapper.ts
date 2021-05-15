// Use this implementation as example
export interface TokenResponse {
  access_token: string;
  token_type: string;
  refresh_token: string;
  expires_in: number;
  scope: string;
}

class AuthToken {
  constructor(
    private readonly _accessToken: string,
    private readonly _tokenType: string,
    private readonly _refreshToken: string,
    private readonly _expiresIn: number,
    private readonly _scope: string,
  ) {}
}

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
