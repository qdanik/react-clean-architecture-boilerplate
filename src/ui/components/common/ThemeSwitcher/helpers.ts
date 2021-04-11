import { ReactComponent as MoonIcon } from 'assets/images/moon.svg'
import { ReactComponent as SunIcon } from 'assets/images/sun.svg'
import { SettingsTheme } from 'core/store/SettingsStore/types'
import { SwitcherIcon, SwitcherPosition } from './types'

export function getSwitcherPosition(value: SettingsTheme): SwitcherPosition {
  switch (value) {
    case SettingsTheme.Light:
      return SwitcherPosition.Left
    case SettingsTheme.Dark:
    default:
      return SwitcherPosition.Right
  }
}

export function getSwitcherIcon(value: SettingsTheme): SwitcherIcon {
  switch (value) {
    case SettingsTheme.Light:
      return SunIcon
    case SettingsTheme.Dark:
    default:
      return MoonIcon
  }
}
