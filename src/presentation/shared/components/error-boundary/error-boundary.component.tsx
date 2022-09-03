import React, { ErrorInfo, ReactNode } from 'react';

import { LoggerType } from 'core/logger';

import { useInjection } from '../ioc';
import { ErrorBoundaryProps, ErrorBoundaryState } from './error-boundary.types';

class ErrorBoundaryComponent extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.logger.error('ErrorBoundary', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <p>Oops, something went wrong.</p>;
    }

    return this.props.children;
  }
}

export function ErrorBoundary(props: { children: ReactNode }) {
  const logger = useInjection(LoggerType);

  return <ErrorBoundaryComponent logger={logger}>{props.children}</ErrorBoundaryComponent>;
}
