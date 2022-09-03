import reduce from 'lodash/reduce';

import { Injectable } from 'containers/config';
import { Storage } from 'core/storage';

import { COOKIE_REGEX } from './browser-cookie.constants';
import { correctKey } from './browser-cookie.helpers';
import { CookieOptions } from './browser-cookie.types';

@Injectable()
export class BrowserCookieAdapter implements Storage {
  get cookie(): string {
    return window.document.cookie;
  }

  set cookie(value: string) {
    window.document.cookie = value;
  }

  get(key: string): string {
    const matches = this.cookie.match(
      new RegExp(`(?:^|; )${key.replace(COOKIE_REGEX, '\\$1')}=([^;]*)`),
    );

    return matches ? decodeURIComponent(matches[1]) : null;
  }

  remove(key: string): this {
    this.set(key, '', {
      expires: null,
      maxAge: -1,
    });

    return this;
  }

  set(key: string, value: string, options = {} as CookieOptions): void {
    const cookieKeyValue = this._getKeyValue(key, value);
    const cookieOptions = this._convertOptions(options);

    this.cookie = `${cookieKeyValue}${cookieOptions}`;
  }

  private _convertOptions(options: CookieOptions): string {
    return reduce(
      {
        path: '/',
        ...options,
      },
      (acc, value, key) => {
        const prepend = `${acc}; ${correctKey(key)}`;

        if (value === true) {
          return prepend;
        }

        if (value instanceof Date) {
          return `${prepend}=${value.toUTCString()}`;
        }

        return `${prepend}=${String(value)}`;
      },
      '',
    );
  }

  private _getKeyValue(key: string, value: string): string {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }
}
