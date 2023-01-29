import React from 'react';
import { ioc } from '@package/infrastructure/ioc';
import { IoC } from '@package/ui-kit';

import { AppRoutes } from './routes';
import { GlobalStyles } from './styles';

export function App(): React.ReactElement {
  return (
    <IoC.Provider container={ioc}>
      <GlobalStyles />
      <AppRoutes />
    </IoC.Provider>
  );
}
