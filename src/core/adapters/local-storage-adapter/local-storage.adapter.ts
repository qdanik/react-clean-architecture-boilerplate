import { Storage } from '@app/core/storage';
import { injectable } from 'inversify';

@injectable()
export class LocalStorageAdapter implements Storage {
  constructor(private _storage = localStorage) {}

  get(key: string): string {
    return this._storage.getItem(key);
  }

  remove(key: string): void {
    this._storage.removeItem(key);
  }

  set(key: string, value: string): void {
    this._storage.setItem(key, value);
  }
}
