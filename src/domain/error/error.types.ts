import { HttpRequestConfig, HttpResponse } from 'core/http';

export type ErrorResponse = Error | HttpResponse<HttpRequestConfig>;

export enum ErrorCodes {
  ERROR = 'ERROR',
  BUSINESS_EXCEPTION = 'BUSINESS_EXCEPTION',
}

export enum StatusCodes {
  UNAUTHORIZED = 401,
}
