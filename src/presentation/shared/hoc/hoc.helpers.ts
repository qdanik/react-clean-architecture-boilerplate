import { FunctionComponent } from 'react';

export function getDisplayName(WrappedComponent: FunctionComponent): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
