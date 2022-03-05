/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from 'react';

export function useDidMount(callback: EffectCallback): void {
  useEffect(callback, []);
}
