import { useContext } from 'react';

import { Container } from 'containers/config';

import { Context } from '../ioc.constants';

export function useContainer(): Container {
  const { container } = useContext(Context);

  if (!container) {
    throw new Error('The container should not be null');
  }

  if (!(container instanceof Container)) {
    throw new Error('The container should have the "Container" instance');
  }

  return container;
}
