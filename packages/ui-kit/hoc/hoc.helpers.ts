import { FunctionComponent } from 'react';

export function getDisplayName<T extends object = object>(
  WrappedComponent: FunctionComponent<T>,
): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
