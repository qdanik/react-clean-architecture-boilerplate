export namespace Cookie {
  
  export interface IAdapter {
    get(key: string): string;
    set(key: string, value: string, options: Cookie.Options): this
    remove(key: string): this;
  }

  export enum Keys {
    RefreshToken = 'REFRESH_TOKEN',
    AccessToken = 'ACCESS_TOKEN',
    XsrfToken = 'XSRF-TOKEN'
  }
  
  export enum SameSite {
    Strict = 'strict',
    Lax = 'lax',
  }
  
  export interface Options {
    domain?: string,
    expires?: Date,
    maxAge?: number,
    path?: string,
    sameSite?: SameSite,
    secure?: boolean,
    httpOnly?: boolean,
  }
  
  export interface SetOptions extends Omit<Options, 'expires'> {
    expires?: string;
  }
}