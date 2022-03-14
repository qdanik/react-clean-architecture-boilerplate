import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Logo from 'assets/images/logo.svg';
import { Main } from './routes.styled';
import { useTranslation } from '../components/i18n';
import { withI18n } from '../hoc';
import { AuthPage } from '../pages';

function RoutesComponent(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Logo width="200px" height="200px" />
              <h1>{t('default:welcome')}</h1>
              <AuthPage />
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export const AppRoutes = withI18n(RoutesComponent);
