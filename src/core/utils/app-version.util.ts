export function appVersion(): void {
  /* eslint-disable no-console */
  if (typeof document !== 'undefined') {
    console.info(`%cApplication version: %c${UI_VERSION}`, 'color: #209cee', 'color: #00d1b2');
  }
}
