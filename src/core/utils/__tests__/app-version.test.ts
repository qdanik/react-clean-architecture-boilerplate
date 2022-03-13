import { appVersion } from '../app-version.util';

describe('AppVersionUtil', () => {
  let spyConsoleInfo;

  beforeEach(() => {
    spyConsoleInfo = jest.spyOn(console, 'info');
  });

  afterEach(() => {
    spyConsoleInfo.mockReset();
    spyConsoleInfo.mockRestore();
    jest.restoreAllMocks();
  });

  it('should not send info about current version to console', () => {
    const prevDocument = globalThis.document;
    globalThis.document = undefined;
    appVersion();

    expect(spyConsoleInfo).not.toHaveBeenCalled();
    globalThis.document = prevDocument;
  });

  it('should send info about current version to console', () => {
    appVersion();

    expect(spyConsoleInfo).toHaveBeenCalledWith(
      `%cApplication version: %c0.0.123`,
      'color: #209cee',
      'color: #00d1b2',
    );
  });
});
