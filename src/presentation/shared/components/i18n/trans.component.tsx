import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';

type Props = {
  i18nKey: string;
};

export const Trans: React.FC<Props> = observer(({ i18nKey }): ReactElement => {
  const { t } = useTranslation();

  return <>{t(i18nKey)}</>;
});
