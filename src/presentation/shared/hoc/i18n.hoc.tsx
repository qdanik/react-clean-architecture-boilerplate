import React, { FunctionComponent, ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { observer } from 'mobx-react';

import { useI18nAdapter } from '../components';
import { getDisplayName } from './hoc.helpers';

export function withI18n<T>(WrappedComponent: FunctionComponent<T>): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T): ReactElement => {
    const { adapter, i18n } = useI18nAdapter();

    if (adapter.isLoading()) {
      return null;
    }

    return (
      <I18nextProvider i18n={i18n}>
        <WrappedComponent {...props} />
      </I18nextProvider>
    );
  });
  WithI18n.displayName = `WithI18n(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
