import { SettingsStore } from 'core/store/SettingsStore'
import { UserStore } from 'core/store/UserStore'

export interface MobxStore {
  user: UserStore,
  settingsStore: SettingsStore
}
