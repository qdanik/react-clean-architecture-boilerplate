import { Storage } from 'core/storage';

import { COOKIE_REGEX } from './browser-cookie.constants';
import { CookieOptions } from './browser-cookie.types';
import {
  convertCookieOptions,
  getCookie,
  getEncodedKeyValue,
  setCookie,
} from './browser-cookie.utils';

export const useBrowserCookieAdapter = (): Storage => {
  const get = (key: string): string => {
    const matches = getCookie().match(
      new RegExp(`(?:^|; )${key.replace(COOKIE_REGEX, '\\$1')}=([^;]*)`),
    );

    return matches ? decodeURIComponent(matches[1]) : null;
  };

  const set = (key: string, value: string, options = {} as CookieOptions): void => {
    const cookieKeyValue = getEncodedKeyValue(key, value);
    const cookieOptions = convertCookieOptions(options);

    setCookie(`${cookieKeyValue}${cookieOptions}`);
  };

  const remove = (key: string): void => {
    set(key, '', {
      expires: null,
      maxAge: -1,
    });
  };

  return {
    get,
    remove,
    set,
  };
};
