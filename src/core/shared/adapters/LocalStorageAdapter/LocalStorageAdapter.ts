import {Storage} from 'core/types';
import {injectable} from 'inversify';

@injectable()
export class LocalStorageAdapter implements Storage.IAdapter {
  static Type = '@adapter/localStorage';

  constructor(private _storage = localStorage, private _event = 'storage') {}

  get(key: string): string {
    return this._storage.getItem(key)
  }

  remove(key: string): void {
    this._storage.removeItem(key)
  }

  set(key: string, value: string): void {
    this._storage.setItem(key, value)
  }
  
  subscribe(callback: () => void): void {
    window.addEventListener(this._event, callback, true);
  }
  
  unsubscribe(callback: () => void): void {
    window.removeEventListener(this._event, callback);
  }
}