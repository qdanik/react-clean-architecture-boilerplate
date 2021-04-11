export enum ThemeVariant {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeApi {
  theme: ThemeVariant
  setTheme: (value: ThemeVariant) => void
}
