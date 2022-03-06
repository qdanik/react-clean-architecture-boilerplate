import { BrowserCookieAdapter } from '../browser-cookie.adapter';
import { CookieSameSite } from '../browser-cookie.typings';

describe('BrowserCookieAdapter', () => {
  let browserCookieAdapter: BrowserCookieAdapter;

  beforeEach(() => {
    browserCookieAdapter = new BrowserCookieAdapter();
  });

  it('set cookie value', () => {
    browserCookieAdapter.set('testSetKey', 'testSetValue');
    expect(window.document.cookie).toBe('testSetKey=testSetValue; path=/');
  });

  it('set cookie value with options', () => {
    const expires = new Date(2033, 1, 1, 12, 0, 0, 0);
    browserCookieAdapter.set('testSetWithOptionsKey', 'testSetWithOptionsValue', {
      domain: 'app.loc',
      expires,
      httpOnly: false,
      maxAge: 99,
      path: '/jest',
      sameSite: CookieSameSite.Strict,
      secure: true,
    });
    expect(window.document.cookie).toBe(
      `testSetWithOptionsKey=testSetWithOptionsValue; path=/jest; domain=app.loc; expires=${expires.toUTCString()}; httpOnly=false; max-age=99; sameSite=strict; secure`,
    );
  });

  it('get existed cookie value', () => {
    browserCookieAdapter.set('testGetExistedKey', 'testGetExistedValue');
    expect(window.document.cookie).toBe('testGetExistedKey=testGetExistedValue; path=/');

    const result = browserCookieAdapter.get('testGetExistedKey');
    expect(result).toBe('testGetExistedValue');
  });

  it('get unknown cookie value', () => {
    const result = browserCookieAdapter.get('testGetUnknownKey');
    expect(result).toBe(null);
  });

  it('remove cookie', () => {
    browserCookieAdapter.set('testRemoveKey', 'testRemoveValue');
    expect(window.document.cookie).toBe('testRemoveKey=testRemoveValue; path=/');

    browserCookieAdapter.remove('testRemoveKey');
    expect(window.document.cookie).toBe('testRemoveKey=; path=/; expires=null; max-age=-1');
  });
});
