import {Api, StoreTypes} from 'core/types';
import isEqual from 'lodash/isEqual';
import {action, computed, observable} from 'mobx';

export class DataStore<TData, TError = Api.IErrorResponse> {

  @observable private _data: TData;

  @observable private _error: TError;

  @observable private _status: StoreTypes.DataStatus = StoreTypes.DataStatus.Loading;

  @computed getError(): TError {
    return this._error;
  }

  @computed getStatus(): StoreTypes.DataStatus {
    return this._status;
  }

  @computed hasError(): boolean {
    return isEqual(this._status, StoreTypes.DataStatus.Error);
  }

  @computed isLoading(): boolean {
    return isEqual(this._status, StoreTypes.DataStatus.Loading);
  }

  @action setData<T = TData>(data: T): void {
    this._data = data as unknown as TData;
  }

  @action setError(error: TError): void {
    this._error = error;
  }

  @action setStatus(status: StoreTypes.DataStatus): void {
    this._status = status;
  }

  @computed valueOf(): TData {
    return this._data;
  }
  
}