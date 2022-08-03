import { ServiceIdentifier } from 'containers/config';

import { useContainer } from './container.hook';

export function useInjection<T>(identifier: ServiceIdentifier<T>): T {
  const container = useContainer();

  try {
    return container.get(identifier) || container.getAll(identifier)?.[0];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(`[UseInjection]: Unable to load ${String(identifier)} service!`);

    return null;
  }
}
