import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Logo from 'assets/images/logo.svg';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & > svg {
    margin-bottom: 10px;
  }

  h1 {
    color: var(--white);
    font-size: 60px;
  }
`;

export const Routes = (): React.ReactElement => {
  return (
    <Switch>
      <Route path="/">
        <Main>
          <Logo width="200px" height="200px" />
          <h1>Hello World</h1>
        </Main>
      </Route>
    </Switch>
  );
};
