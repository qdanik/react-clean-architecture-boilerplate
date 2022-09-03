import { HttpRequestConfig } from 'core/http';

import { ErrorCodes, StatusCodes } from '../error.types';

export class Error {
  constructor(
    private readonly _statusCode: number,
    private readonly _code: ErrorCodes,
    private readonly _message: string,
    private readonly _details: string,
    private readonly _config: HttpRequestConfig,
  ) {}

  get statusCode(): number {
    return this._statusCode;
  }

  get code(): ErrorCodes {
    return this._code;
  }

  get message(): string {
    return this._message;
  }

  get details(): string {
    return this._details;
  }

  get config(): HttpRequestConfig {
    return this._config;
  }

  isUnauthorized(): boolean {
    return this.statusCode === StatusCodes.UNAUTHORIZED;
  }
}
