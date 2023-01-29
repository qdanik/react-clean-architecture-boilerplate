import { InitOptions } from 'i18next';

import { I18nLanguages, I18nNamespaces } from '../../i18n';

export const I18N_CONFIG: InitOptions = {
  appendNamespaceToMissingKey: true,
  backend: {
    loadPath: `/locales/{{lng}}/{{ns}}.${APP_PLATFORM}.json`,
  },
  cleanCode: true,
  contextSeparator: '__',
  debug: DEV,
  defaultNS: I18nNamespaces.translation,
  fallbackLng: false,
  initImmediate: true,
  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: I18nLanguages.en,
  load: 'languageOnly',
  missingKeyNoValueFallbackToKey: true,
  ns: [I18nNamespaces.translation],

  nsSeparator: ':',
  pluralSeparator: '_',
  preload: [I18nLanguages.en],

  react: {
    useSuspense: false,
  },
  saveMissing: false,
  simplifyPluralSuffix: true,
  supportedLngs: Object.values(I18nLanguages),
};
