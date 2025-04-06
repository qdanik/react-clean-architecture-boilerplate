import { ContainerModule } from 'inversify';

import {
  AxiosAdapter,
  BrowserCookieAdapter,
  I18nextAdapter,
  LocalStorageAdapter,
  ReactHookFormAdapter,
  SessionStorageAdapter,
  WebLoggerAdapter,
} from 'core/adapters';
import { FormType } from 'core/form';
import { HttpClientType } from 'core/http';
import { I18nType } from 'core/i18n';
import { LoggerType } from 'core/logger';
import { MobxStoreImpl, MobxStoreType } from 'core/mobx-store';
import { CookieStorageName, LocalStorageName, SessionStorageName, StorageType } from 'core/storage';

export const coreModules = new ContainerModule(container => {
  container.bind(LoggerType).to(WebLoggerAdapter);
  container.bind(MobxStoreType).to(MobxStoreImpl).inSingletonScope();
  container.bind(StorageType).to(BrowserCookieAdapter).whenNamed(CookieStorageName);
  container.bind(StorageType).to(LocalStorageAdapter).whenNamed(LocalStorageName);
  container.bind(StorageType).to(SessionStorageAdapter).whenNamed(SessionStorageName);
  container.bind(HttpClientType).to(AxiosAdapter);
  container.bind(FormType).to(ReactHookFormAdapter);
  container.bind(I18nType).to(I18nextAdapter).inSingletonScope();
});
