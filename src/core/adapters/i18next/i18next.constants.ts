import { InitOptions } from 'i18next';

import { I18nLanguages, I18nNamespaces } from 'core/i18n';

export const I18N_CONFIG: InitOptions = {
  appendNamespaceToMissingKey: true,
  cleanCode: true,
  contextSeparator: '__',
  debug: DEV,
  defaultNS: I18nNamespaces.translation,
  fallbackLng: I18nLanguages.en,
  initImmediate: true,

  interpolation: {
    escapeValue: false,
  },
  keySeparator: false,
  lng: I18nLanguages.en,
  missingKeyNoValueFallbackToKey: true,
  ns: Object.values(I18nNamespaces),
  nsSeparator: ':',

  pluralSeparator: '_',
  preload: [I18nLanguages.en],
  resources: {},

  saveMissing: true,
  simplifyPluralSuffix: true,
  supportedLngs: Object.values(I18nLanguages),
};
