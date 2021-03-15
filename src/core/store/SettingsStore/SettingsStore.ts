import {Storage} from 'core/types';
import includes from 'lodash/includes';
import {action, computed, makeAutoObservable, observable} from 'mobx';
import {SettingsTheme} from './types';

export class SettingsStore {
  @observable private _theme: SettingsTheme = localStorage.getItem(Storage.Keys.Theme) as SettingsTheme || SettingsTheme.Dark;

  constructor() {
    makeAutoObservable(this);
  }

  @computed getTheme(): SettingsTheme {
    return this._theme;
  }

  @action.bound setTheme(value: SettingsTheme): void {
    if(!value || !includes(SettingsTheme, value)) {
      return;
    }

    this._theme = value;
  }
}