export enum StorageKeys {
  Theme = 'AppTheme',
  LoggedIn = 'isLoggedIn',
}

export interface Storage {
  get: (key: string) => string;
  set: (key: string, value: string, ...args: any[]) => void;
  remove: (key: string) => void;
}

export const CookieStorageType = Symbol('CookieStorage');
export const LocalStorageType = Symbol('LocalStorage');
