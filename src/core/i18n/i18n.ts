import { I18nLanguages } from './i18n.typings';

export interface I18n<InstanceType = any> {
  getInstance(): InstanceType;
  isInitialized(): boolean;
  isLoading(): boolean;
  changeLanguage(language: I18nLanguages): Promise<boolean>;
  getLanguage(): I18nLanguages;
}
