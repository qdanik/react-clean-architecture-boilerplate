import { ContainerModule } from 'inversify';
import {
  AxiosAbortAdapter,
  AxiosAbortName,
  AxiosAdapter,
  AxiosMemoAdapter,
  AxiosMemoName,
  BrowserCookieAdapter,
  LocalStorageAdapter,
  SessionStorageAdapter,
  ReactHookFormAdapter,
} from 'core/adapters';
import { FormType } from 'core/form';
import { HttpClientAdapterType, HttpClientType } from 'core/http';
import { StorageType, CookieStorageName, LocalStorageName, SessionStorageName } from 'core/storage';

export const baseAdapters = new ContainerModule(bind => {
  bind(StorageType).to(BrowserCookieAdapter).whenTargetNamed(CookieStorageName);
  bind(StorageType).to(LocalStorageAdapter).whenTargetNamed(LocalStorageName);
  bind(StorageType).to(SessionStorageAdapter).whenTargetNamed(SessionStorageName);
  bind(HttpClientAdapterType).to(AxiosAbortAdapter).whenTargetNamed(AxiosAbortName);
  bind(HttpClientAdapterType).to(AxiosMemoAdapter).whenTargetNamed(AxiosMemoName);
  bind(HttpClientType).to(AxiosAdapter);
  bind(FormType).to(ReactHookFormAdapter);
});
