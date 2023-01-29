import React from 'react';
import { I18nNamespaces } from '@package/infrastructure/i18n';
import { observer } from 'mobx-react';

import { useTranslation } from './i18n.hook';

type Props = {
  i18nKey: string;
  ns?: I18nNamespaces;
};

export const Trans: React.FC<Props> = observer(({ i18nKey, ns = I18nNamespaces.translation }) => {
  const { t, adapter } = useTranslation(ns);

  if (adapter.isLoading()) {
    return null;
  }

  return <>{t(i18nKey)}</>;
});
