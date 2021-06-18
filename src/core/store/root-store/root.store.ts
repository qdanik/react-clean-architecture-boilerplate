import { SettingsStore } from 'core/store/settings-store';
import { UserStore } from 'core/store/user-store';
import { MobxStore } from '../store.typings';

export class RootStore implements MobxStore {
  user: UserStore = new UserStore();

  settingsStore: SettingsStore = new SettingsStore();
}
