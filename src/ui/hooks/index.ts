import {useEffect} from 'react';

export function useDidMount(callback: (() => () => void) | (() => void)): void {
  useEffect(() => {
    return callback();
  }, [])
}