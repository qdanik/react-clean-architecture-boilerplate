import languageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { action, computed, makeAutoObservable, observable } from 'mobx';
import { Injectable } from 'containers/config';
import { I18n, I18nLanguages, i18nNamespaces } from 'core/i18n';
import i18nextInstance, { i18n as i18next, ReadCallback } from 'i18next';

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

  private initialize = async (): Promise<void> => {
    try {
      this._setLoading(true);
      await this._instance
        .use(resourcesToBackend(this._loadResources))
        .use(languageDetector)
        .init({
          appendNamespaceToMissingKey: true,
          cleanCode: true,
          contextSeparator: '_',
          debug: DEV,
          defaultNS: i18nNamespaces.common,
          fallbackLng: I18nLanguages.en,
          fallbackNS: i18nNamespaces.default,
          initImmediate: true,
          keySeparator: '.',
          lng: I18nLanguages.en,
          missingKeyNoValueFallbackToKey: true,
          ns: Object.values(i18nNamespaces),
          nsSeparator: ':',
          pluralSeparator: '_',
          preload: [I18nLanguages.en],
          resources: {},
          saveMissing: true,
          simplifyPluralSuffix: true,
          supportedLngs: Object.values(I18nLanguages),
        });
      await this._instance.reloadResources();
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this._setLoading(false);
    }
  };

  private _loadResources = async (
    language: string,
    namespace: string,
    callback: ReadCallback,
  ): Promise<void> => {
    try {
      const resources = await import(`../../../../assets/locales/${language}/${namespace}.json`);
      callback(null, resources);
    } catch (error) {
      callback(error, null);

      return Promise.reject(error);
    }
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
