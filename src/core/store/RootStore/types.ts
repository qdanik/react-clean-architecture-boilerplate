import {SettingsStore} from 'core/store/SettingsStore';
import {UserStore} from 'core/store/UserStore';

export interface IStore {
  user: UserStore;
  settingsStore: SettingsStore;
}