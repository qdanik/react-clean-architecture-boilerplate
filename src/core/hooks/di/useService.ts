import {useContext} from 'react';
import {DependencyInjectorContext} from './constants';

export function useService<T>(type: string): T {
  const di = useContext(DependencyInjectorContext);

  return di.get(type);
}