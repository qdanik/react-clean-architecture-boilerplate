import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { container } from 'containers';
import { Routes } from 'ui/routes';
import { IoCProvider } from './ioc';
import { GlobalStyles } from './styles';

export const App = (): React.ReactElement => {
  return (
    <IoCProvider container={container}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </IoCProvider>
  );
};
