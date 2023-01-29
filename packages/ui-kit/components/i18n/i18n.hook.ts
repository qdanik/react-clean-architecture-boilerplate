import { useEffect, useState } from 'react';
import { I18n, I18nLanguages, I18nNamespaces, I18nType } from '@package/infrastructure/i18n';
import { i18n as I18NextType, TFunction } from 'i18next';

import { useInjection } from '../ioc';

const defaulTFunction: TFunction = () => null;

export function useTranslation(ns: I18nNamespaces = I18nNamespaces.translation): {
  t: TFunction;
  i18n: I18NextType;
  adapter: I18n;
  language: I18nLanguages;
  exists: (key: string) => boolean;
} {
  const i18next: I18n<I18NextType> = useInjection(I18nType);
  const instance = i18next.getInstance();
  const [ready, setReady] = useState(i18next.hasNamespace(ns));

  useEffect(() => {
    async function loadNamespaces() {
      await i18next.loadNamespaces(ns);
      setReady(true);
    }

    if (!ready) {
      loadNamespaces();
    }
  }, [ready, ns, i18next]);

  return {
    adapter: i18next,
    exists: instance.exists,
    i18n: instance,
    language: i18next.getLanguage(),
    t: ready ? instance.getFixedT(i18next.getLanguage(), ns) : defaulTFunction,
  };
}
