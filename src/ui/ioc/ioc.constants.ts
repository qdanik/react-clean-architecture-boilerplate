import React from 'react';
import { ContainerContext } from './ioc.typings';

export const IoCContext = React.createContext<ContainerContext>({ container: null });
