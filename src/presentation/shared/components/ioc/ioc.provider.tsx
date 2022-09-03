import React, { useMemo } from 'react';

import { Context } from './ioc.constants';
import { IoCProps } from './ioc.types';

export function Provider({ container, children }: IoCProps): React.ReactElement {
  const providerValue = useMemo(() => ({ container }), [container]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}
