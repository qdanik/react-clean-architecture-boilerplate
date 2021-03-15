export namespace Storage {
  export enum Keys {
    Theme = 'AppTheme',
    LoggedIn = 'isLoggedIn'
  }
  
  export interface IAdapter {
    get: (key: string) => string;
    set: (key: string, value: string) => void;
    remove: (key: string) => void;
    subscribe: (callback: () => void) => void;
    unsubscribe: (callback: () => void) => void;
  }
}