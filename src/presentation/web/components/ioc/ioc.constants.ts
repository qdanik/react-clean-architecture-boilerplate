import React from 'react';
import { ContainerContext } from './ioc.typings';

export const Context = React.createContext<ContainerContext>({ container: null });
