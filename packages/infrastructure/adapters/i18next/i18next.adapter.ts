import { initReactI18next } from 'react-i18next';
import i18nextInstance, { i18n as i18next } from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import i18nextHttpBackend from 'i18next-http-backend';
import { action, computed, makeAutoObservable, observable } from 'mobx';

import { I18n, I18nLanguages } from '../../i18n';
import { Injectable } from '../../ioc';
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
    await this.getInstance().changeLanguage(value);
    await this.getInstance().reloadResources();
    this._language = value;
  };

  private initialize = async (): Promise<void> => {
    this._setLoading(true);

    try {
      await this._instance
        .use(languageDetector)
        .use(initReactI18next)
        .use(i18nextHttpBackend)
        .init(I18N_CONFIG);

      return await Promise.resolve();
    } catch (error) {
      return await Promise.reject(error);
    } finally {
      this._setLoading(false);
    }
  };

  hasNamespace = (namespace: string): boolean => {
    if (
      this.isInitialized() &&
      this.getInstance().hasResourceBundle(this.getLanguage(), namespace)
    ) {
      return true;
    }

    return false;
  };

  loadNamespaces = async (namespaces: string): Promise<boolean> => {
    try {
      if (this.hasNamespace(namespaces)) {
        return true;
      }
      await this.getInstance().reloadResources(this.getLanguage(), namespaces);

      return true;
    } catch (error) {
      return false;
    }
  };

  isInitialized = (): boolean => {
    return this.getInstance().isInitialized;
  };

  getInstance = (): i18next => {
    return this._instance;
  };

  @computed isLoading = (): boolean => {
    return this._loading;
  };

  @computed getLanguage = (): I18nLanguages => {
    return this._language || (this.getInstance().language as I18nLanguages);
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
