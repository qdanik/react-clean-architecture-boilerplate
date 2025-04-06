import { ServiceIdentifier } from 'containers/config';

import { useContainer } from './container.hook';

export function useInjection<T>(identifier: ServiceIdentifier<T>): T {
  const container = useContainer();

  try {
    return container.get(identifier);
  } catch {
    console.error(`[UseInjection]: Unable to load ${String(identifier)} service!`);

    return null;
  }
}
