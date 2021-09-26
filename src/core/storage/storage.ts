export interface Storage {
  get: (key: string) => string;
  set: (key: string, value: string, ...args: any[]) => void;
  remove: (key: string) => void;
}
