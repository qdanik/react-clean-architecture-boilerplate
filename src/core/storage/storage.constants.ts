import { ServiceIdentifier } from 'containers/core';
import { Storage } from './storage';

export const CookieStorageType: ServiceIdentifier<Storage> = Symbol('CookieStorage');
export const LocalStorageType: ServiceIdentifier<Storage> = Symbol('LocalStorage');
