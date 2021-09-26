import React, { ReactElement } from 'react';
import { Route as BaseRoute, RouteProps } from 'react-router-dom';

export const Route = (props: RouteProps): ReactElement => {
  return <BaseRoute {...props} />;
};
