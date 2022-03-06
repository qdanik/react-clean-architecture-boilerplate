export interface Logger {
  error(...args: any[]): void;
  warn(...args: any[]): void;
  info(module: string, ...args: any[]): void;
  debug(...args: any[]): void;
  trace(...args: any[]): void;
}
