import { I18nLanguages } from './i18n.types';

export interface I18n<InstanceType = unknown> {
  getInstance(): InstanceType;
  getLanguage(): I18nLanguages;

  isInitialized(): boolean;
  isLoading(): boolean;

  changeLanguage(language: I18nLanguages): Promise<boolean>;
  loadNamespaces(namespaces: string): Promise<boolean>;
  hasNamespace(namespace: string): boolean;
}
