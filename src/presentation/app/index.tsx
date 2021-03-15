import {Auth} from 'core/domain';
import {useDidMount, useService} from 'core/hooks';
import {useAppTheme} from 'core/hooks/theme';
import {observer} from 'mobx-react';
import {Routes} from 'presentation/routes';
import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {GlobalStyles} from './styles';

export const App = observer((): React.ReactElement => {
  const authCtrl = useService<Auth.Controller.AuthController>(Auth.Controller.AuthController.Type);

  useDidMount(() => authCtrl.checkTokens());
  useAppTheme();
  
  return (
    <>
      <GlobalStyles />
      <Router >
        <Routes />
      </Router>
    </>
  )
})