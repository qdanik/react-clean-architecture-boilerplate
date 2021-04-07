import {useEffect} from 'react';

export * from './di';

export function useDidMount(callback: (() => () => void) | (() => void)): void {
  useEffect(() => {
    return callback();
  }, [])
}