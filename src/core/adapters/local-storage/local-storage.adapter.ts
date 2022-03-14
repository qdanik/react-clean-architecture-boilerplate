import { Injectable } from 'containers/config';
import { Storage } from 'core/storage';

@Injectable()
export class LocalStorageAdapter implements Storage {
  constructor(private readonly _storage: globalThis.Storage = window.localStorage) {}

  private _notify(eventInit: StorageEventInit) {
    window.dispatchEvent(new StorageEvent('storage', { ...eventInit, storageArea: this._storage }));
  }

  private _getStorageCallback(callback: () => void) {
    return (event: StorageEvent): void => {
      if (event.storageArea !== this._storage) {
        return;
      }

      callback();
    };
  }

  get(key: string): string {
    return this._storage.getItem(key);
  }

  remove(key: string): void {
    const oldValue = this.get(key);
    this._storage.removeItem(key);

    this._notify({
      key,
      newValue: null,
      oldValue,
    });
  }

  set(key: string, value: string): void {
    const oldValue = this.get(key);
    this._storage.setItem(key, value);

    this._notify({
      key,
      newValue: value,
      oldValue,
    });
  }

  listen = (callback: () => void): (() => void) => {
    const storageCallback = this._getStorageCallback(callback);
    window.addEventListener('storage', storageCallback);

    return () => {
      window.removeEventListener('storage', storageCallback);
    };
  };
}
