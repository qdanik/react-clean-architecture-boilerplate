/* eslint-disable no-console */
import { Injectable } from 'containers/config';
import { Logger } from 'core/logger';

@Injectable()
export class WebLoggerAdapter implements Logger {
  error<Args>(...args: Args[]): void {
    if (!DEV) {
      return;
    }

    console.error(...args);
  }

  warn<Args>(...args: Args[]): void {
    if (!DEV) {
      return;
    }

    console.warn(...args);
  }

  info<Args>(module: string, ...args: Args[]): void {
    if (!DEV) {
      return;
    }

    console.group(`[${module}]`);
    console.log(...args);
    console.groupEnd();
  }

  debug<Args>(...args: Args[]): void {
    if (!DEV) {
      return;
    }

    console.debug(...args);
  }

  trace<Args>(...args: Args[]): void {
    if (!DEV) {
      return;
    }

    console.trace(...args);
  }
}
