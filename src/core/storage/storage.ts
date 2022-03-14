export interface Storage {
  get: (key: string) => string;
  set: (key: string, value: string, ...args: unknown[]) => void;
  remove: (key: string) => void;
}
