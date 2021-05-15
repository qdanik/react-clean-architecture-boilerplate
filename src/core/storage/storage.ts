import { ServiceIdentifier } from '@app/containers/typings';

export const CookieStorageType: ServiceIdentifier<Storage> = Symbol('CookieStorage');
export const LocalStorageType: ServiceIdentifier<Storage> = Symbol('LocalStorage');

export interface Storage {
  get: (key: string) => string;
  set: (key: string, value: string, ...args: any[]) => void;
  remove: (key: string) => void;
}
