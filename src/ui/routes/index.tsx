import Logo from 'assets/images/logo.svg';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routes = (): React.ReactElement => {
  return (
    <Switch>
      <Route path="/">
        <Logo />
        <h1>Hello World</h1>
      </Route>
    </Switch>
  );
};
