import React, { FunctionComponent, ReactElement } from 'react';
import DotsLoader from 'assets/images/dots-loader.svg';
import { observer } from 'mobx-react';

import { getDisplayName } from 'presentation/web/hoc/hoc.helpers';

import { useTranslation } from '../components/i18n/i18n.hook';

export function withI18n<T>(WrappedComponent: FunctionComponent<T>): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T): ReactElement => {
    const { adapter } = useTranslation();

    if (adapter.isLoading()) {
      return <DotsLoader fill="#f56733" />;
    }

    return <WrappedComponent {...props} />;
  });
  WithI18n.displayName = `WithI18n(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
