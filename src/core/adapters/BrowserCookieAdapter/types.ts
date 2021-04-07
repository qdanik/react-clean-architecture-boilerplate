export enum CookieKeys {
  RefreshToken = 'REFRESH_TOKEN',
  AccessToken = 'ACCESS_TOKEN',
  XsrfToken = 'XSRF-TOKEN'
}

export enum CookieSameSite {
  Strict = 'strict',
  Lax = 'lax',
}

export interface CookieOptions {
  domain?: string,
  expires?: Date,
  maxAge?: number,
  path?: string,
  sameSite?: CookieSameSite,
  secure?: boolean,
  httpOnly?: boolean,
}

export interface CookieSetOptions extends Omit<CookieOptions, 'expires'> {
  expires?: string;
}