import React from 'react';
import { AuthPresenterType } from 'presentation/presenters/auth';
import { useInjection } from 'presentation/web/components';
import { Auth } from 'presentation/web/modules/auth';

export function AuthPage(): React.ReactElement {
  const authPresenter = useInjection(AuthPresenterType);

  return <Auth presenter={authPresenter} />;
}
