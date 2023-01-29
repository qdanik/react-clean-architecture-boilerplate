import { ReactNode } from 'react';
import { Logger } from '@package/infrastructure/logger';

export type ErrorBoundaryProps = {
  logger: Logger;
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
