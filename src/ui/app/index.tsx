import {Auth} from 'domain';
import {observer} from 'mobx-react';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDidMount, useService} from 'ui/hooks';
import {useAppTheme} from 'ui/hooks/theme';
import {Routes} from 'ui/routes';
import {GlobalStyles} from './styles';

export const App = observer(
  (): React.ReactElement => {
    const authCtrl = useService<Auth.Controller.AuthController>(
      Auth.Controller.AuthController.Type
    );

    useDidMount(() => authCtrl.checkTokens());
    useAppTheme();

    return (
      <>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </>
    );
  }
);
