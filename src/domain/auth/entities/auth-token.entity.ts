export class AuthToken {
  constructor(
    private readonly _accessToken: string,
    private readonly _tokenType: string,
    private readonly _refreshToken: string,
    private readonly _expiresIn: number,
    private readonly _scope: string,
  ) {}

  get accessToken(): string {
    return this._accessToken;
  }
}
