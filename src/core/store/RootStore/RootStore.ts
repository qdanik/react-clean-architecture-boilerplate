import {SettingsStore} from 'core/store/SettingsStore';
import {UserStore} from 'core/store/UserStore';
import {IStore} from './types';

export class RootStore implements IStore {
  user: UserStore = new UserStore();

  settingsStore: SettingsStore = new SettingsStore();
}