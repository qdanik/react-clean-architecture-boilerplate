/* eslint-disable no-useless-escape */
import {Cookie} from 'core/types';
import {injectable} from 'inversify';
import forEach from 'lodash/forEach';
import {correctKey} from './helpers';

@injectable()
export class CookieAdapter implements Cookie.IAdapter {
  static Type = '@adapter/cookie';

  private _convertOptions(options: Cookie.Options): string {
    let result = '';

    forEach(options, (value, key) => {
      result += `; ${correctKey(key)}`;

      if (value instanceof Boolean) {
        return;
      }

      result += `=${value}`;
    });

    return result;
  }

  private _getKeyValue(key: string, value: string): string {
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  }

  get(key: string): string {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));

    return matches ? decodeURIComponent(matches[1]) : null;
  }

  remove(key: string): this {
    this.set(key, '', {
      maxAge: -1
    });

    return this;
  }

  set(key: string, value: string, options = {} as Cookie.Options): this {
    const nextOptions: Cookie.SetOptions = {
      path: '/'
    };

    if (options.expires instanceof Date) {
      nextOptions.expires = options.expires.toUTCString();
    }

    const cookieKeyValue = this._getKeyValue(key, value);
    const cookieOptions = this._convertOptions(options);

    document.cookie = `${cookieKeyValue}${cookieOptions}`;

    return this;
  }

}