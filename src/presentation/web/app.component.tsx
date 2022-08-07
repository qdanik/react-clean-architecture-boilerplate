import React from 'react';

import { AppContainer } from 'containers';
import { IoC } from 'presentation/shared';
import { AppRoutes } from 'presentation/web/routes';

import { GlobalStyles } from './styles';

export function App(): React.ReactElement {
  return (
    <IoC.Provider container={AppContainer}>
      <GlobalStyles />
      <AppRoutes />
    </IoC.Provider>
  );
}
