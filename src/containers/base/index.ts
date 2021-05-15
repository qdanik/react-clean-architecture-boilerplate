import { AxiosAdapter, BrowserCookieAdapter, LocalStorageAdapter } from '@app/core/adapters';
import { HttpClientType } from '@app/core/http';
import { CookieStorageType, LocalStorageType } from '@app/core/storage';
import { ContainerModule } from 'inversify';

export const baseAdapters = new ContainerModule(bind => {
  bind(CookieStorageType).to(BrowserCookieAdapter);
  bind(LocalStorageType).to(LocalStorageAdapter);
  bind(HttpClientType).to(AxiosAdapter);
});
