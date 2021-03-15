import {Adapters} from 'core/shared/adapters';
import {injectable} from 'inversify';

@injectable()
export class StorageService {
  static Type = '@service/storage';

  constructor(
    private _adapter = new Adapters.LocalStorageAdapter()
  ) { }

  get = (key: string): string => this._adapter.get(key);

  remove = (key: string): void => this._adapter.remove(key);

  set = (key: string, value: string): void => this._adapter.set(key, value);
  
  subscribe = (callback: () => void): void => this._adapter.subscribe(callback);

  unsubscribe = (callback: () => void): void => this._adapter.unsubscribe(callback);
}