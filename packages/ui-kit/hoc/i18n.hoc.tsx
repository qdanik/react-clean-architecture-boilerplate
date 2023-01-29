import React, { FunctionComponent } from 'react';
import { I18n, I18nType } from '@package/infrastructure/i18n';
import { i18n as I18NextType } from 'i18next';
import { observer } from 'mobx-react';

import { useInjection } from '../components';
import { getDisplayName } from './hoc.helpers';

export function withI18n<T extends object = object>(
  WrappedComponent: FunctionComponent<T>,
): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T) => {
    const i18next: I18n<I18NextType> = useInjection(I18nType);

    if (i18next.isLoading()) {
      return null;
    }

    return <WrappedComponent {...props} />;
  });
  WithI18n.displayName = `WithI18n(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
