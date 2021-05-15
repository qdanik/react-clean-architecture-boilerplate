import React from 'react';
import { IoCContext } from './ioc.constants';
import { IoCProps } from './ioc.typings';

export function IoCProvider({ container, children }: IoCProps): React.ReactElement<any> {
  return <IoCContext.Provider value={{ container }}>{children}</IoCContext.Provider>;
}
