export function appVersion(): void {
  if (typeof document !== 'undefined') {
    console.info(`%cApplication version: %c${UI_VERSION}`, 'color: #209cee', 'color: #00d1b2');
  }
}
