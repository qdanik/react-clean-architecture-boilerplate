import React from 'react';
import { withErrorBoundary } from '@package/ui-kit';
import { Auth } from 'modules/auth';

function AuthPageComponent(): React.ReactElement {
  return <Auth />;
}

export const AuthPage = withErrorBoundary(AuthPageComponent);
