export enum CookieSameSite {
  Strict = 'strict',
  Lax = 'lax',
}

export type CookieOptions<ExpireType = Date> = Partial<{
  domain: string;
  expires: ExpireType;
  maxAge: number;
  path: string;
  sameSite: CookieSameSite;
  secure: boolean;
  httpOnly: boolean;
}>;
