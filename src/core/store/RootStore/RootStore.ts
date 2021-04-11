import { SettingsStore } from 'core/store/SettingsStore'
import { UserStore } from 'core/store/UserStore'
import { MobxStore } from './types'

export class RootStore implements MobxStore {
  user: UserStore = new UserStore()

  settingsStore: SettingsStore = new SettingsStore()
}
