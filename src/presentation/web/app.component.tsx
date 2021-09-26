import React from 'react';
import { AppContainer } from 'containers';
import { Routes } from 'presentation/web/routes';
import { IoC } from './components/ioc';
import { GlobalStyles } from './styles';

export const App = (): React.ReactElement => {
  return (
    <IoC.Provider container={AppContainer}>
      <GlobalStyles />
      <Routes />
    </IoC.Provider>
  );
};
