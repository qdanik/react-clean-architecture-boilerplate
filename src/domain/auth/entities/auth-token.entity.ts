export class AuthToken {
  constructor(
    private readonly _accessToken: string,
    private readonly _tokenType: string,
    private readonly _refreshToken: string,
    private readonly _expires: number,
  ) {}

  get accessToken(): string {
    return this._accessToken;
  }

  get tokenType(): string {
    return this._tokenType;
  }

  get refreshToken(): string {
    return this._refreshToken;
  }

  get expires(): number {
    return this._expires;
  }
}
