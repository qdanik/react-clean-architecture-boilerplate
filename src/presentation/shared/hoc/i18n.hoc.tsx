import React, { FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { useTranslation } from '../components';
import { getDisplayName } from './hoc.helpers';

export function withI18n<T>(WrappedComponent: FunctionComponent<T>): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T): ReactElement => {
    const { adapter } = useTranslation();

    if (adapter.isLoading()) {
      return null;
    }

    return <WrappedComponent {...props} />;
  });
  WithI18n.displayName = `WithI18n(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
