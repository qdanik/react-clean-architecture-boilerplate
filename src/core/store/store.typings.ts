import { SettingsStore } from '@app/core/store/settings-store';
import { UserStore } from '@app/core/store/user-store';

export enum DataStatus {
  NotRequested = 'NotRequested',
  Loading = 'Loading',
  Error = 'Error',
  Received = 'Received',
}

export interface MobxStore {
  user: UserStore;
  settingsStore: SettingsStore;
}
