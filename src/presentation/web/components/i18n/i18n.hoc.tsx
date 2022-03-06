import { observer } from 'mobx-react';
import React, { FunctionComponent, ReactElement } from 'react';
// import DotsLoader from 'assets/images/dots-loader.svg';
import { getDisplayName } from 'presentation/web/hoc/hoc.helpers';
import { useTranslation } from './i18n.hook';

export function withI18n<T>(WrappedComponent: FunctionComponent<T>): FunctionComponent<T> {
  const WithI18n: FunctionComponent<T> = observer((props: T): ReactElement => {
    const { adapter } = useTranslation();

    if (adapter.isLoading()) {
      return null;
    }

    return (
      <>
        <WrappedComponent {...props} />
      </>
    );
  });
  WithI18n.displayName = `WithHeader(${getDisplayName(WrappedComponent)})`;

  return WithI18n;
}
