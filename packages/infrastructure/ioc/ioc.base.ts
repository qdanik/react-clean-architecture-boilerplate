import { ContainerModule } from 'inversify';

import {
  AxiosAdapter,
  BrowserCookieAdapter,
  I18nextAdapter,
  LocalStorageAdapter,
  ReactHookFormAdapter,
  SessionStorageAdapter,
  WebLoggerAdapter,
} from '../adapters';
import { FormType } from '../form';
import { HttpClientType } from '../http';
import { I18nType } from '../i18n';
import { LoggerType } from '../logger';
import { MobxStoreImpl, MobxStoreType } from '../mobx-store';
import { CookieStorageName, LocalStorageName, SessionStorageName, StorageType } from '../storage';
import { ioc } from './ioc.setup';

const baseModules = new ContainerModule(bind => {
  bind(LoggerType).to(WebLoggerAdapter);
  bind(MobxStoreType).to(MobxStoreImpl).inSingletonScope();
  bind(StorageType).to(BrowserCookieAdapter).whenTargetNamed(CookieStorageName);
  bind(StorageType).to(LocalStorageAdapter).whenTargetNamed(LocalStorageName);
  bind(StorageType).to(SessionStorageAdapter).whenTargetNamed(SessionStorageName);
  bind(HttpClientType).to(AxiosAdapter);
  bind(FormType).to(ReactHookFormAdapter);
  bind(I18nType).to(I18nextAdapter).inSingletonScope();
});

ioc.load(baseModules);
