import {User} from 'core/domain';
import {useService} from 'core/hooks';
import {observer} from 'mobx-react';
import {Auth, Home} from 'presentation/pages';
import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useHistory,
  useRouteMatch
} from 'react-router-dom';

export const Routes = observer((): React.ReactElement => {
  const userPresenter = useService<User.Presenter.UserPresenter>(User.Presenter.UserPresenter.Type);
  const userController = useService<User.Controller.UserController>(User.Controller.UserController.Type);
  const history = useHistory();
  const isSignInRoute = useRouteMatch('/sign-in');

  useEffect(() => {
    userController.checkToken(Boolean(isSignInRoute), history)
  }, [history, isSignInRoute, userPresenter.hasToken()])
  
  return (
    <Switch>
      <Route exact path="/sign-in">
        <Auth.SignIn />
      </Route>
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
  )
})