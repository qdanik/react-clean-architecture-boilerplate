import reduce from 'lodash/reduce';

import { CookieOptions } from './browser-cookie.types';

export function correctKey(key: string): string {
  switch (key) {
    case 'maxAge':
      return 'max-age';
    default:
      return key;
  }
}

export const getCookie = (): string => window.document.cookie;

export const setCookie = (value: string) => {
  window.document.cookie = value;
};

export const getEncodedKeyValue = (key: string, value: string): string => {
  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
};

export const convertCookieOptions = (options: CookieOptions): string => {
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
};
