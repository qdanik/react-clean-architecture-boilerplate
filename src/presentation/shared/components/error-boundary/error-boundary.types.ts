import { ReactNode } from 'react';

import { Logger } from 'core/logger';

export type ErrorBoundaryProps = {
  logger: Logger;
  children: ReactNode;
};

export type ErrorBoundaryState = {
  hasError: boolean;
};
