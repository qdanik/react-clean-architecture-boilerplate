import isEmpty from 'lodash/isEmpty';
import { observable, computed, makeAutoObservable, action } from 'mobx';
import { UserData } from './user.store.typings';
import { DataStore } from '../_shared';

export class UserStore {
  @observable private _token: string = null;

  @observable userData = new DataStore<UserData>();

  constructor() {
    makeAutoObservable(this);
  }

  @computed hasToken(): boolean {
    return !isEmpty(this._token);
  }

  @computed isSignedIn(): boolean {
    return !isEmpty(this.userData.valueOf());
  }

  @action setToken(value: string): void {
    this._token = value;
  }
}
