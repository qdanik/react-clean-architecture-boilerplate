import isEqual from 'lodash/isEqual';
import { action, computed, observable } from 'mobx';
import { DataStatus } from '../store.typings';

export class DataStore<TData, TError = any> {
  @observable private _data: TData;

  @observable private _error: TError;

  @observable private _status: DataStatus = DataStatus.Loading;

  @computed getError(): TError {
    return this._error;
  }

  @computed getStatus(): DataStatus {
    return this._status;
  }

  @computed hasError(): boolean {
    return isEqual(this._status, DataStatus.Error);
  }

  @computed isLoading(): boolean {
    return isEqual(this._status, DataStatus.Loading);
  }

  @action setData<T = TData>(data: T): void {
    this._data = (data as unknown) as TData;
  }

  @action setError(error: TError): void {
    this._error = error;
  }

  @action setStatus(status: DataStatus): void {
    this._status = status;
  }

  @computed valueOf(): TData {
    return this._data;
  }
}
