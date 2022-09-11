import i18nextInstance, { i18n as i18next, ReadCallback, ResourceKey } from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { action, computed, makeAutoObservable, observable } from 'mobx';

import { Injectable } from 'containers/config';
import { I18n, I18nLanguages } from 'core/i18n';

import { I18N_CONFIG } from './i18next.constants';

@Injectable()
export class I18nextAdapter implements I18n<i18next> {
  private _instance: i18next = i18nextInstance;

  @observable private _loading = true;

  @observable private _language: I18nLanguages = I18nLanguages.en;

  constructor() {
    makeAutoObservable(this);
    this.initialize();
  }

  @action private _setLoading = (value: boolean): void => {
    this._loading = value;
  };

  @action private _setLanguage = async (value: I18nLanguages): Promise<void> => {
    await this._instance.changeLanguage(value);
    await this._instance.reloadResources();
    this._language = value;
  };

  private initialize = (): void => {
    this._setLoading(true);
    this._instance
      .use(resourcesToBackend(this._loadResources))
      .use(languageDetector)
      .init(I18N_CONFIG)
      .then(() => this._instance.reloadResources())
      .catch((error: Error) => Promise.reject(error))
      .finally(() => {
        this._setLoading(false);
      });
  };

  private _loadResources = (language: string, namespace: string, callback: ReadCallback): void => {
    const fileName = APP_PLATFORM ? `${namespace}.${APP_PLATFORM}` : namespace;

    import(`../../../../assets/locales/${language}/${fileName}.json`)
      .then((file: { default: ResourceKey }) => {
        callback(null, file.default);
      })
      .catch((error: Error) => {
        callback(error, null);
      });
  };

  isInitialized = (): boolean => {
    return this._instance.isInitialized;
  };

  getInstance = (): i18next => {
    return this._instance;
  };

  @computed isLoading = (): boolean => {
    return this._loading;
  };

  @computed getLanguage = (): I18nLanguages => {
    return this._language || (this._instance.language as I18nLanguages);
  };

  changeLanguage = async (language: I18nLanguages): Promise<boolean> => {
    try {
      await this._setLanguage(language);

      return true;
    } catch (error) {
      await this._setLanguage(I18nLanguages.en);

      return false;
    }
  };
}
