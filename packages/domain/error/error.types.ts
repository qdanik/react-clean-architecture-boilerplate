import { HttpRequestConfig, HttpResponse } from '@package/infrastructure/http';

export type ErrorResponse = Error | HttpResponse<HttpRequestConfig>;

export enum ErrorCodes {
  ERROR = 'ERROR',
  BUSINESS_EXCEPTION = 'BUSINESS_EXCEPTION',
}

export enum StatusCodes {
  UNAUTHORIZED = 401,
}
