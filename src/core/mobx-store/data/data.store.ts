import isEqual from 'lodash/isEqual';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import { DataStatus } from './data.typings';

export class DataStore<TData, TError = any> {
  @observable private _data: TData;

  @observable private _error: TError;

  @observable private _status: DataStatus = DataStatus.Loading;

  constructor() {
    makeAutoObservable(this);
  }

  @computed getError = (): TError => {
    return this._error;
  };

  @computed getStatus = (): DataStatus => {
    return this._status;
  };

  @computed hasError = (): boolean => {
    return isEqual(this._status, DataStatus.Error);
  };

  @computed isLoading = (): boolean => {
    return isEqual(this._status, DataStatus.Loading);
  };

  @action setData = <T extends TData = TData>(data: T): void => {
    this._data = data;
  };

  @action setError = (error: TError): void => {
    this._error = error;
  };

  @action setStatus = (status: DataStatus): void => {
    this._status = status;
  };

  @computed valueOf = (): TData => {
    return this._data;
  };
}
