import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '@package/domain/route';

import { ProtectedRouteProps } from './protected-route.types';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  redirectPath = ROUTES.signIn.toString(),
  children,
  roles,
}) => {
  if (!user || (roles && !user?.hasRoles(roles))) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};
