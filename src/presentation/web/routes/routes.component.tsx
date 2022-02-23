import React from 'react';
import { Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from 'assets/images/logo.svg';
import { Main } from './routes.styled';
import { Route } from '../components';
import { AuthPage } from '../pages';

export const Routes = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main>
            <Logo width="200px" height="200px" />
            <h1>Hello World</h1>
            <AuthPage />
          </Main>
        </Route>
      </Switch>
    </Router>
  );
};
