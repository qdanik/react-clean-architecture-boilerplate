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
  I18nextAdapter,
} from 'core/adapters';
import { FormType } from 'core/form';
import { HttpClientAdapterType, HttpClientType } from 'core/http';
import { I18nType } from 'core/i18n';
import { StorageType, CookieStorageName, LocalStorageName, SessionStorageName } from 'core/storage';

export const baseAdapters = new ContainerModule(bind => {
  bind(StorageType).to(BrowserCookieAdapter).whenTargetNamed(CookieStorageName);
  bind(StorageType).to(LocalStorageAdapter).whenTargetNamed(LocalStorageName);
  bind(StorageType).to(SessionStorageAdapter).whenTargetNamed(SessionStorageName);
  bind(HttpClientAdapterType).to(AxiosAbortAdapter).whenTargetNamed(AxiosAbortName);
  bind(HttpClientAdapterType).to(AxiosMemoAdapter).whenTargetNamed(AxiosMemoName);
  bind(HttpClientType).to(AxiosAdapter);
  bind(FormType).to(ReactHookFormAdapter);
  bind(I18nType).to(I18nextAdapter).inSingletonScope();
});
