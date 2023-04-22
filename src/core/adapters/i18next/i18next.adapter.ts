import { initReactI18next } from 'react-i18next';
import i18nextInstance, { i18n as i18next } from 'i18next';
import languageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
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

  private initialize = async (): Promise<void> => {
    this._setLoading(true);

    try {
      await this._instance
        .use(HttpBackend)
        .use(languageDetector)
        .use(initReactI18next)
        .init(I18N_CONFIG);

      return await this._instance.reloadResources();
    } catch (error) {
      return await Promise.reject(error);
    } finally {
      this._setLoading(false);
    }
  };

  @action private _setLoading = (value: boolean): void => {
    this._loading = value;
  };

  @action private _setLanguage = async (value: I18nLanguages): Promise<void> => {
    await this._instance.changeLanguage(value);
    await this._instance.reloadResources();
    this._language = value;
  };

  @computed isLoading = (): boolean => {
    return this._loading;
  };

  @computed getLanguage = (): I18nLanguages => {
    return this._language || (this._instance.language as I18nLanguages);
  };

  isInitialized = (): boolean => {
    return this._instance.isInitialized;
  };

  getInstance = (): i18next => {
    return this._instance;
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
