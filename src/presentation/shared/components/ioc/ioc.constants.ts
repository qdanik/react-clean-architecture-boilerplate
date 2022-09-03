import React from 'react';

import { ContainerContext } from './ioc.types';

export const Context = React.createContext<ContainerContext>({ container: null });
