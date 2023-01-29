import React, { FunctionComponent, ReactElement } from 'react';
import { observer } from 'mobx-react';

import { ErrorBoundary } from '../components';
import { getDisplayName } from './hoc.helpers';

export function withErrorBoundary<T>(WrappedComponent: FunctionComponent<T>): FunctionComponent<T> {
  const WithErrorBoundary: FunctionComponent<T> = observer((props: T): ReactElement => {
    return (
      <ErrorBoundary>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  });
  WithErrorBoundary.displayName = `withErrorBoundary(${getDisplayName(WrappedComponent)})`;

  return WithErrorBoundary;
}
