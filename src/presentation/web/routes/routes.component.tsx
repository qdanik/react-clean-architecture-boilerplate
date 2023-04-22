import React from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { withI18n } from 'presentation/shared';

import { AuthPage } from '../pages';
import { Main } from './routes.styled';

function RoutesComponent(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <h1>{t('welcome')}</h1>
              <AuthPage />
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export const AppRoutes = withI18n(RoutesComponent);
