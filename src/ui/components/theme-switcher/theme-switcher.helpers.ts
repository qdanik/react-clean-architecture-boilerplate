import MoonIcon from 'assets/images/moon.svg';
import SunIcon from 'assets/images/sun.svg';
import { SettingsTheme } from 'core/store/settings-store/settings.typings';
import { SwitcherIcon, SwitcherPosition } from './theme-switcher.typings';

export function getSwitcherPosition(value: SettingsTheme): SwitcherPosition {
  switch (value) {
    case SettingsTheme.Light:
      return SwitcherPosition.Left;
    case SettingsTheme.Dark:
    default:
      return SwitcherPosition.Right;
  }
}

export function getSwitcherIcon(value: SettingsTheme): SwitcherIcon {
  switch (value) {
    case SettingsTheme.Light:
      return SunIcon;
    case SettingsTheme.Dark:
    default:
      return MoonIcon;
  }
}
