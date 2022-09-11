import { i18n as I18NextType, TFunction } from 'i18next';

import { I18n, I18nLanguages, I18nType } from 'core/i18n';

import { useInjection } from '../ioc';

export function useTranslation(): {
  t: TFunction;
  i18n: I18NextType;
  adapter: I18n;
  language: I18nLanguages;
  exists: (key: string) => boolean;
} {
  const i18next: I18n<I18NextType> = useInjection(I18nType);
  const instance = i18next.getInstance();

  return {
    adapter: i18next,
    exists: instance.exists,
    i18n: instance,
    language: i18next.getLanguage(),
    t: instance.t,
  };
}
