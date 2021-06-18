import { Container } from 'inversify';
import { useContext } from 'react';
import { IoCContext } from '../ioc.constants';

export function useContainer(): Container {
  const { container } = useContext(IoCContext);

  if (!container) {
    throw new Error('The container should not be null');
  }

  if (!(container instanceof Container)) {
    throw new Error('The container should have the "Container" instance');
  }

  return container;
}
