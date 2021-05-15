import { SettingsTheme } from '@app/core/store/settings-store/settings.typings';

export interface ThemeSwitcherProps {
  value: SettingsTheme;
  onChange: () => void;
}

export enum SwitcherPosition {
  Left = '3px',
  Right = 'calc(100% - 25px)',
}

export interface SwitcherBubbleProps {
  position: SwitcherPosition;
}

export type SwitcherIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
