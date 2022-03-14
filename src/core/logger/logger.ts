/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Logger {
  error<Args extends any[]>(...args: Args): void;
  warn<Args extends any[]>(...args: Args): void;
  info<Args extends any[]>(module: string, ...args: Args): void;
  debug<Args extends any[]>(...args: Args): void;
  trace<Args extends any[]>(...args: Args): void;
}
