import {User} from 'core/domain';
import {useService} from 'core/hooks';
import {observer} from 'mobx-react';
import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router';

export const Home = observer((): React.ReactElement => {
  const userPresenter = useService<User.Presenter.UserPresenter>(User.Presenter.UserPresenter.Type);
  const {path} = useRouteMatch();
  
  return (
    <Switch>
      <Route exact path={path}>
        <h1>Hello Man</h1>
      </Route>
      <Route exact>
        <h1>1 Hello Man</h1>
      </Route>
    </Switch>
  )
})