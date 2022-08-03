import { i18n as I18NextType } from 'i18next';

import { ServiceIdentifier } from 'containers/config';

import { I18n } from './i18n';

export const I18nType: ServiceIdentifier<I18n<I18NextType>> = Symbol('I18n');
