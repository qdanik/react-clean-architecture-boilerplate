import { BrowserCookieAdapter } from '../browser-cookie.adapter';

describe('BrowserCookieAdapter', () => {
  let browserCookieAdapter: BrowserCookieAdapter;

  beforeEach(() => {
    browserCookieAdapter = new BrowserCookieAdapter();
  });

  it('set cookie value', () => {
    browserCookieAdapter.set('testSetKey', 'testSetValue');

    expect(window.document.cookie).toStrictEqual('testSetKey=testSetValue');
    browserCookieAdapter.remove('testSetKey');
  });

  it('get existed cookie value', () => {
    browserCookieAdapter.set('testGetExistedKey', 'testGetExistedValue');
    const result = browserCookieAdapter.get('testGetExistedKey');

    expect(result).toBe('testGetExistedValue');
    browserCookieAdapter.remove('testGetExistedKey');
  });

  it('get unknown cookie value', () => {
    const result = browserCookieAdapter.get('testGetUnknownKey');

    expect(result).toBe(null);
  });

  it('remove cookie', () => {
    browserCookieAdapter.set('testRemoveKey', 'testRemoveValue');
    expect(window.document.cookie).toBe('testRemoveKey=testRemoveValue');

    browserCookieAdapter.remove('testRemoveKey');
    expect(window.document.cookie).toBe('');
  });
});
