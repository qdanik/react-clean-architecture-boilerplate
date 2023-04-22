import { InitOptions } from 'i18next';

import { I18nLanguages, I18nNamespaces } from 'core/i18n';
import { StorageKeys } from 'core/storage';

export const I18N_CONFIG: InitOptions = {
  appendNamespaceToMissingKey: true,
  backend: {
    addPath: null,
    loadPath: `/assets/locales/{{lng}}/{{ns}}.${APP_PLATFORM}.json`,
  },
  cleanCode: true,
  contextSeparator: '__',
  debug: IS_DEV,
  defaultNS: I18nNamespaces.translation,
  detection: {
    lookupFromPathIndex: 0,
    lookupLocalStorage: StorageKeys.Language,
    order: ['path', 'localStorage', 'navigator'],
  },
  fallbackLng: I18nLanguages.en,

  initImmediate: true,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  load: 'languageOnly',
  missingKeyNoValueFallbackToKey: true,
  ns: Object.values(I18nNamespaces),
  nsSeparator: ':',

  pluralSeparator: '_',
  react: {
    useSuspense: false,
  },

  resources: {},
  saveMissing: true,
  simplifyPluralSuffix: true,
  supportedLngs: Object.values(I18nLanguages),
};
