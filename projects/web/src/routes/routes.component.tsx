import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nNamespaces } from '@package/infrastructure/i18n';
import { useTranslation, withI18n } from '@package/ui-kit';
import { observer } from 'mobx-react';

import { Main } from './routes.styled';

const AuthPage = lazy(() => import('../pages/auth'));

function RoutesComponent(): React.ReactElement {
  const { t } = useTranslation(I18nNamespaces.translation);
  const { t: test } = useTranslation(I18nNamespaces.test);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <h1>{t('welcome')}</h1>
              <h1>{test('welcome.test')}</h1>
              <AuthPage />
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export const AppRoutes = withI18n(observer(RoutesComponent));
