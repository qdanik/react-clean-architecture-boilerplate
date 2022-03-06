import { observer } from 'mobx-react';
import React, { FunctionComponent, ReactElement } from 'react';
import { getDisplayName } from 'presentation/web/hoc/hoc.helpers';
import { ErrorBoundary } from '../components';

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
