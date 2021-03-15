import {SettingsTheme} from 'core/store/SettingsStore/types';

export interface ThemeSwitcherProps {
  value: SettingsTheme;
  onChange: () => void;
}

export enum SwitcherPosition {
  Left = '3px',
  Right = 'calc(100% - 25px)'
}

export interface SwitcherBubbleProps {
  position: SwitcherPosition
}

export type SwitcherIcon = () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, any>) | (new (props: any) => React.Component<any, any, any>)>;