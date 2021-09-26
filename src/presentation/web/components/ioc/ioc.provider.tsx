import React from 'react';
import { Context } from './ioc.constants';
import { IoCProps } from './ioc.typings';

export function Provider({ container, children }: IoCProps): React.ReactElement<any> {
  return <Context.Provider value={{ container }}>{children}</Context.Provider>;
}
