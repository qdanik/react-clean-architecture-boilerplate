import MoonIcon from 'assets/images/moon';
import SunIcon from 'assets/images/sun';
import {SettingsTheme} from 'core/store/SettingsStore/types';
import {SwitcherIcon, SwitcherPosition} from './types';

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