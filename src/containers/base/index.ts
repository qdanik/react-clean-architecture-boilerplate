import {AxiosAdapter, BrowserCookieAdapter, LocalStorageAdapter} from 'core/adapters';
import {HttpClientType} from 'core/http';
import {CookieStorageType, LocalStorageType} from 'core/storage';
import {ContainerModule} from 'inversify';

export const baseAdapters = new ContainerModule((bind) => {
  bind(CookieStorageType).to(BrowserCookieAdapter)
  bind(LocalStorageType).to(LocalStorageAdapter)
  bind(HttpClientType).to(AxiosAdapter)
})