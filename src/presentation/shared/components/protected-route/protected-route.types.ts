import React from 'react';

export type ProtectedRouteProps = {
  user: { hasRoles(roles: Array<unknown>): boolean };
  redirectPath?: string;
  children?: React.ReactElement;
  roles?: Array<unknown>;
};
