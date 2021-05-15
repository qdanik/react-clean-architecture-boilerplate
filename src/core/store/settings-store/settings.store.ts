import { StorageKeys } from '@app/core/storage';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import { SettingsTheme } from './settings.typings';

export class SettingsStore {
  @observable private _theme: SettingsTheme =
    (localStorage.getItem(StorageKeys.Theme) as SettingsTheme) || SettingsTheme.Dark;

  constructor() {
    makeAutoObservable(this);
  }

  @computed getTheme(): SettingsTheme {
    return this._theme;
  }

  @action.bound setTheme(value: SettingsTheme): void {
    this._theme = value;
  }
}
