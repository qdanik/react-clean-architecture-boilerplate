export interface Logger {
  error<Args extends Array<unknown>>(...args: Args): void;
  warn<Args extends Array<unknown>>(...args: Args): void;
  info<Args extends Array<unknown>>(module: string, ...args: Args): void;
  debug<Args extends Array<unknown>>(...args: Args): void;
  trace<Args extends Array<unknown>>(...args: Args): void;
}
