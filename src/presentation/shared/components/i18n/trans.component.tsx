import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';

import { useTranslation } from './i18n.hook';

type Props = {
  i18nKey: string;
};

export const Trans: React.FC<Props> = observer(({ i18nKey }): ReactElement => {
  const { t, adapter } = useTranslation();

  if (adapter.isLoading()) {
    return null;
  }

  return t(i18nKey);
});
