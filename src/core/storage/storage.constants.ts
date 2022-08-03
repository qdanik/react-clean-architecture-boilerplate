import { ServiceIdentifier } from 'containers/config';

import { Storage } from './storage';

export const StorageType: ServiceIdentifier<Storage> = Symbol('Storage');

export const CookieStorageName = Symbol('CookieStorage');
export const LocalStorageName = Symbol('LocalStorage');
export const SessionStorageName = Symbol('SessionStorage');
