import { i18n as I18NextType } from 'i18next';

import { I18n, I18nLanguages, I18nType } from 'core/i18n';

import { useInjection } from '../ioc';

export function useTranslation(): {
  t: I18NextType['t'];
  i18n: I18NextType;
  adapter: I18n;
  language: I18nLanguages;
} {
  const i18next: I18n<I18NextType> = useInjection(I18nType);
  const instance = i18next.getInstance();

  return {
    adapter: i18next,
    i18n: instance,
    language: i18next.getLanguage(),
    t: instance.t,
  };
}
