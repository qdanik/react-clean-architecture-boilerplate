/* eslint-disable no-console */
import { Injectable } from 'containers/config';
import { Logger } from 'core/logger';

@Injectable()
export class WebLoggerAdapter implements Logger {
  error(...args: any[]): void {
    if (!DEV) {
      return;
    }

    console.error(...args);
  }

  warn(...args: any[]): void {
    if (!DEV) {
      return;
    }

    console.warn(...args);
  }

  info(...args: any[]): void {
    if (!DEV) {
      return;
    }

    console.log(...args);
  }

  debug(...args: any[]): void {
    if (!DEV) {
      return;
    }

    console.debug(...args);
  }

  trace(...args: any[]): void {
    if (!DEV) {
      return;
    }

    console.trace(...args);
  }
}
