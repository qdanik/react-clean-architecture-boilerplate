import { i18n as i18next } from 'i18next';
import { I18n, I18nType } from 'core/i18n';
import { useInjection } from '..';

export function useTranslation(): {
  t: i18next['t'];
  i18n: i18next;
  adapter: I18n;
  isChanged: boolean;
} {
  const i18next: I18n<i18next> = useInjection(I18nType);
  const instance = i18next.getInstance();

  return {
    adapter: i18next,
    i18n: instance,
    isChanged: i18next.isChanged(),
    t: instance.t,
  };
}
