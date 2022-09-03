import { I18nLanguages } from './i18n.types';

export interface I18n<InstanceType = unknown> {
  getInstance(): InstanceType;
  isInitialized(): boolean;
  isLoading(): boolean;
  changeLanguage(language: I18nLanguages): Promise<boolean>;
  getLanguage(): I18nLanguages;
}
