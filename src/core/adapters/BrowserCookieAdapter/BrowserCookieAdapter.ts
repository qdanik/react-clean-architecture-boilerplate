import {CookieOptions, CookieSetOptions} from 'core/cookie';
import {Storage} from 'core/storage';
import {injectable} from 'inversify';
import reduce from 'lodash/reduce';
import {COOKIE_REGEX} from './constants';
import {correctKey} from './helpers';

@injectable()
export class BrowserCookieAdapter implements Storage {
  get cookie(): string {
    return document.cookie;
  }

  set cookie(value: string) {
    document.cookie = value;
  }

  get(key: string): string {
    const matches = this.cookie.match(new RegExp(
      "(?:^|; )" + key.replace(COOKIE_REGEX, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : null;
  }

  remove(key: string): this {
    this.set(key, '', {
      maxAge: -1
    });

    return this;
  }

  set(key: string, value: string, options = {} as CookieOptions): void {
    const nextOptions: CookieSetOptions = {
      path: '/'
    };

    if (options.expires instanceof Date) {
      nextOptions.expires = options.expires.toUTCString();
    }

    const cookieKeyValue = this._getKeyValue(key, value);
    const cookieOptions = this._convertOptions(options);

    this.cookie = `${cookieKeyValue}${cookieOptions}`;
  }

  private _convertOptions(options: CookieOptions): string {
    return reduce(options, (acc, value, key) => {
      const prepend = `${acc}; ${correctKey(key)}`;

      if (value instanceof Boolean) {
        return prepend;
      }

      return `${prepend}=${value}`;
    }, '');
  }

  private _getKeyValue(key: string, value: string): string {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }

}